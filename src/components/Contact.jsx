import { motion } from "framer-motion";
import {
  FaFacebookMessenger,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import QRCode from "react-qr-code";

export default function ContactCard() {
  const contacts = [
    {
      name: "WhatsApp",
      url: "https://wa.me/+639923633161",
      icon: <FaWhatsapp className="w-12 h-12 text-white mb-4" />,
    },
    {
      name: "Messenger",
      url: "https://m.me/Reddalunos",
      icon: <FaFacebookMessenger className="w-12 h-12 text-white mb-4" />,
    },
    {
      name: "Telegram",
      url: "https://t.me/@Alupss",
      icon: <FaTelegramPlane className="w-12 h-12 text-white mb-4" />,
    },
    {
      name: "Email",
      url: "mailto:rdalunos20@gmail.com",
      icon: <SiGmail className="w-12 h-12 text-white mb-4" />,
    },
  ];

  return (
    <section id="contact" className="py-20 text-white px-6 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Contact Me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-12">
        {contacts.map((contact, index) => (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white/20 hover:bg-white/30 rounded-lg p-6 transition-transform hover:scale-105"
          >
            {contact.icon}
            <span className="text-lg font-medium">{contact.name}</span>
            <div className="text-center">
              <div className="inline-block p-4 bg-white rounded-xl">
                <QRCode value={contact.url} size={128} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
