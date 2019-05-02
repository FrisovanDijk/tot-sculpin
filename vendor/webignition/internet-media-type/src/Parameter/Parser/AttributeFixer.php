<?php

namespace webignition\InternetMediaType\Parameter\Parser;

/**
 * Attempts to fix unparseable internet media types based purely on
 * observed invalid media type strings that, upon visual observation, can
 * be translated into something sensible
 */
class AttributeFixer
{
    const COMMA_SEPARATED_TYPE_SEPARATOR = ', ';

    /**
     * @var string
     */
    private $inputString;

    /**
     * @param string $inputString
     */
    public function setInputString($inputString)
    {
        $this->inputString = $inputString;
    }

    /**
     * @return string|null
     */
    public function fix()
    {
        $fixedString = $this->inputString;

        if ($this->isInvalid($this->inputString)) {
            $fixedString = $this->colonSeparatedAttributeValueFix($this->inputString);
        }

        return $fixedString;
    }

    /**
     * @param string $parameterString
     *
     * @return bool
     */
    private function isInvalid($parameterString)
    {
        try {
            $parser = new AttributeParser();
            $parser->parse($parameterString);
        } catch (\Exception $exception) {
            return true;
        }

        return false;
    }

    /**
     * Attempt to fix a parameter string that incorrectly uses a colon as
     * the attribute-value separator instead of the equals sign
     *
     * Invalid form "attribute: value"
     * Correct form "attribute=value"
     *
     * Attempt to translate invalid form into correct form
     *
     * @param string $parameterString
     *
     * @return string
     */
    private function colonSeparatedAttributeValueFix($parameterString)
    {
        if (!preg_match('/.+\:\s+.+/', $parameterString)) {
            return $parameterString;
        }

        return preg_replace('/\:\s+/', '=', $parameterString);
    }
}
