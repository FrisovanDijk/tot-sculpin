---
layout: blogpost
title: How do smartcards work?
subtitle: Digital security on a critical piece of technology
intro: Electronic cards have become so common in our everyday lives that we seldom spare a thought to the different types of cards that exist or how they work. The SIM cards in our phone, the ticketing cards we use for travel or the credit/debit cards without which we cannot live or leave our house. But what exactly goes in these cards and how do we know they are secure? In this article we will explore these and other questions that come to mind.
readtime: 5 min
heroimg: "featured.png"
color: "#DC5A5A"
author:
    1:
        name: "David Smith"
        img: "davidsmith.jpg"
---

## A brief history of cards

While Diners and American Express <a href="https://www.mobiletransaction.org/history-of-credit-card-machines/" target="_blank">payment cards</a> were in use since the 1950’s, the first electronic payment cards appeared in the 1970’s. They consisted of a magnetic stripe to store data about the card holder. They were very similar in principle to magnetic audio/video tapes which we know from storing music and video.

Gradually these magnetic stripe cards have been replaced by smart cards or chip-based cards. These cards use an embedded integrated circuit chip to store data and/or process information. Just think of the small shiny square at the back of your credit card. It is nothing but an embedded chip. Smart cards come in two varieties based on whether they need to be in contact with the reader.

1. Contact based cards. These require physical contact between the card and the card reader. The chip comes with a contact area of around 1 square centimetre with gold plated contact pads to connect to the reader. The chip is powered by the reader when it comes in contact with the reader and can communicate with the reader through electric signals.

<figure class='imgcenter'>
    <img src='smartcards1.png' alt='The chip in your smartcard'>
    <figcaption>The microchip in a contact based card</figcaption>
</figure>

2. Contactless cards. These do not require physical contact with the reader but need to be held close to the reader in order to be read. They use <a href="https://en.wikipedia.org/wiki/Radio-frequency_identification" target="_blank">RFID</a> induction technology which powers the card when it is brought into the electromagnetic field of the reader. The card then uses wireless communication to exchange data with the reader.

<figure class='imgcenter'>
    <img src='smartcards2.png' alt='RFID card architecture'>
    <figcaption>The parts of a contactless card</figcaption>
</figure>

## Digital components

The chips used inside smart cards are also known as microprocessors or integrated circuits. These are nothing but micro-computers, which are computers very small in size and capacity. They can however store data and perform calculations just like a normal computer. Like any other <a href="https://people.cs.uchicago.edu/~dinoj/smartcard/arch-1.html" target="_blank">computer</a>, they have memory, CPU, Input/output ports and an operating system to manage it all. All of this fits into the small chip which is clearly visible in most thin plastic smart cards.

The smart card microcontroller is said to be secure because it can carry out on-card functions like encryption and mutual authentication while interacting intelligently with the reader. The following schematic from <a href="https://www.w3.org/2012/webcrypto/webcrypto-next-workshop/papers/webcrypto2014_submission_3.pdf" target="_blank">w3.org (pdf)</a> shows what a typical smart card looks like on the inside.

![Smart card chip architecture](smartcards3.png){.imgcenter}

The chip manufacturers may incorporate their own features and security modules on the chip based on the requirements and intended use of the card. The intended smart card application would determine the strength of the chip platform to be selected. For example a smart card intended to be used as a bank card would require a robust platform and include multiple levels of authentication. In comparison, security may be slightly weaker on cards used as store loyalty cards or transport card where transactions are of considerably lower value.

The card body itself is made of plastic which makes it durable. In addition to a micro-computer, contactless cards are also equipped with an antenna to communicate with the reader.

## Data Security

Data stored on smart cards is encrypted and cannot be read by an outsider. The security modules inside smart card chips are capable of carrying out encryption operations on transaction data when communicating with the reader. This ensures that the <a href="http://www.cardzgroup.com/ContactSmartCard.html" target="_blank">data involved</a> in any transaction cannot be read by an outsider who does not have access to the keys used for encrypting data. EMV smart cards use a unique token for every transactions thus ensuring the security of transaction data. RFID cards or contact less cards are considered more secure because they can be used without removing them from the wallet, thus people cannot <a href="https://www.twentyoftime.com/2018/physical-privacy-measures/" target="_blank">peak at sensitive data</a> like CVV number which is sometimes on the card.

Smart cards can also store any type of data related to the user and may be integrated with other technologies thus providing a means of multimodal authentication which increases the security of data and transactions. For example, biometric smart cards allow users to store biometric information about the card holder. The security modules on these cards can also compare the live biometric data with the stored template during a transaction thus authenticating the identity of the person. Smart cards which implement multi-modal authentication mechanisms can increase security against identity theft or use of stolen/lost cards and are becoming more popular.

## Conclusion

The security provided by these cards is the main reason why we see them being used in so many varied applications and systems where identity verification, authentication and exchange of monetary value is involved. The smart cards chips these days may not always be embedded in cards, but could be on devices like smart phones, key fobs, arm bands, etc. The underlying technology remains the same. Whatever the form factor used, these tiny chips which pack so much power have become so common place that we have stopped noticing them. Look around you and will find a couple of them in your pocket or lying nearby. And now you know what goes on inside.

*David Smith is a cryptographer with 12 years experience in both the public and private sectors. He is currently working on his second startup (currently in stealth mode) that will track and interpret the use of contactless payments in the Greater China region. His expertise includes: system design and implementation with contact and contactless smart cards, smart card personalization, mobile payments, and general knowledge and experience with APAC market trends and consumer preferences.*