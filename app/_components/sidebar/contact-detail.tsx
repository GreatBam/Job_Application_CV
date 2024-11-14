/**
 *
 * @file: contact-detail.tsx
 *
 * @copyright: Jonathan Gabioud
 *
 * @version: 1.0
 *
 **/

import { CalendarDays, House, Mail, Phone } from "lucide-react";

export default function ContactDetail() {
  return (
    <>
      <h3 className="sidebar-subtitles">COORDONNÉES</h3>
      <div className="pl-2">
        <p className="details">
          <Mail className="w-3" />
          jonathan.gabioud@hotmail.com
        </p>
        <p className="details">
          <House className="w-3" />
          Route de la Cantine 59
        </p>
        <p className="details">
          <Phone className="w-3" />
          +41 78 922 40 47
        </p>
        <p className="details">
          <CalendarDays className="w-3" />
          28 Déc, 1987
        </p>
      </div>
    </>
  );
}
