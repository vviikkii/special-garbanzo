import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Országok</li>
          <li className="fListItem">Régiók</li>
          <li className="fListItem">Városok</li>
          <li className="fListItem">Kerületek</li>
          <li className="fListItem">Repülőterek</li>
          <li className="fListItem">Szállodák</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Otthonok</li>
          <li className="fListItem">Apartmanok</li>
          <li className="fListItem">Üdülőközpontok</li>
          <li className="fListItem">Villák</li>
          <li className="fListItem">Hostelek</li>
          <li className="fListItem">Vendégházak</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Egyedi szállások</li>
          <li className="fListItem">Felfedezés</li>
          <li className="fListItem">Értékelések</li>
          <li className="fListItem">Cikkek</li>
          <li className="fListItem">Időszakos és ünnepi ajánlatok</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Autókölcsönzés</li>
          <li className="fListItem">Repülőjárat-kereső</li>
          <li className="fListItem">Asztalfoglalás</li>
          <li className="fListItem">Utazási ügynököknek</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Ügyfélszolgálat</li>
          <li className="fListItem">Súgó</li>
          <li className="fListItem">Karrier</li>
          <li className="fListItem">Fenntarthatóság</li>
          <li className="fListItem">Sütibeállítások kezelése</li>
          <li className="fListItem">Információs központ</li>
          <li className="fListItem">Kapcsolattartás vállalatoknak</li>
          <li className="fListItem">Szerződési feltételek</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 BookIng.</div>
    </div>
  );
};

export default Footer;
