/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react"; // Importez useState

export default function ContactSection() {
  // Déclarez des états pour chaque champ du formulaire
  const [firstName, setFirstName] = useState(""); // Nouveau : état pour le prénom
  const [lastName, setLastName] = useState(""); // Nouveau : état pour le nom de famille
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // Pour afficher le statut de l'envoi (succès/erreur)

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Location",
      value: "Oran, Algeria",
    },
    {
      icon: <MdEmail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Email",
      value: "ib.yebdri@gmail.com",
    },
    {
      icon: <FaPhoneAlt className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
      title: "Phone",
      value: "+213 778653633",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/ib.yebdri",
      icon: <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/Ibrahim_yebdri",
      icon: <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Instagram",
    },
    {
      href: "https://t.me/Ibrahim_yebdri",
      icon: <FaTelegramPlane className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Telegram",
    },
    {
      href: "https://api.whatsapp.com/send/?phone=%2B213778653633&text&type=phone_number&app_absent=0",
      icon: <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "WhatsApp",
    },
    {
      href: "mailto:ib.yebdri@gmail.com",
      icon: <MdEmail className="h-4 w-4 sm:h-5 sm:w-5" />,
      label: "Email",
    },
  ];

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page par défaut

    setStatus("sending"); // Indique que l'envoi est en cours

    const formData = {
      firstName, // Nouveau : inclure le prénom
      lastName,  // Nouveau : inclure le nom de famille
      _replyto: email,
      phone,
      subject,
      message,
    };

    try {
      const response = await fetch("https://formspree.io/f/mblyovep", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Réinitialiser les champs du formulaire après succès
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        console.error("Formspree error:", response.statusText);
      }
    } catch (error) {
      setStatus("error");
      console.error("Network or Formspree error:", error);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">
            Get In Touch
          </h2>
          <div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out to me using the form below or through my
            contact information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-text-primary">
              Contact Information
            </h3>
            <p className="text-sm sm:text-base text-text-secondary">
              Feel free to reach out to me through any of the following methods.
              I'm always open to discussing new projects, creative ideas, or
              opportunities.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-medium text-text-primary">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-text-primary">
                Follow Me
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex items-center text-text-primary justify-center p-2 text-sm font-medium transition-colors rounded-full border border-border bg-background hover:bg-muted"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card p-5 sm:p-6 md:p-8 rounded-lg shadow-sm sm:shadow-md border border-border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text-primary">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Nouveau Champ Prénom */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="firstName"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName" // Nom qui sera envoyé à Formspree
                      placeholder="Votre prénom"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required // Vous pouvez le rendre obligatoire
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                    />
                  </div>

                  {/* Nouveau Champ Nom de Famille */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="lastName"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName" // Nom qui sera envoyé à Formspree
                      placeholder="Votre nom de famille"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required // Vous pouvez le rendre obligatoire
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                    />
                  </div>

                  {/* Champ Email */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="_replyto" // Très important pour Formspree : utilisez "_replyto"
                      placeholder="Votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                    />
                  </div>

                  {/* Champ Téléphone */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Votre numéro de téléphone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                    />
                  </div>

                  {/* Champ Subject (qui reste en col-span-2 sur mobile et s'adapte sur desktop) */}
                  <div className="col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Sujet de votre message"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary"
                    />
                  </div>

                  {/* Champ Message */}
                  <div className="col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm text-text-primary mb-1 sm:mb-2 capitalize"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Écrivez votre message ici..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary text-text-primary min-h-[100px] sm:min-h-[150px]"
                    ></textarea>
                  </div>
                </div>

                {/* Champ Honeypot (invisible pour les utilisateurs) - Bonne pratique anti-spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-primary text-text-primary rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <FaPaperPlane className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />{" "}
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />{" "}
                      Envoyer le message
                    </>
                  )}
                </button>

                {/* Affichage du statut (succès/erreur) */}
                {status === "success" && (
                  <p className="text-center text-green-500 mt-4 text-sm sm:text-base">
                    Message envoyé avec succès !
                  </p>
                )}
                {status === "error" && (
                  <p className="text-center text-red-500 mt-4 text-sm sm:text-base">
                    Erreur lors de l'envoi du message. Veuillez réessayer.
                  </p>
                )}
              </form>
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
}