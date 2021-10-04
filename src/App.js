import React from "react";
import ContactCard from "./ContactCard";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="contatcs">
      <ContactCard
        name="Mr. Pedigree"
        img
        src={"img/dog.jpg"}
        phone="(212) 555-1569"
        email="mr.pedigree@dog.haf"
      />

      <ContactCard
        name="Miss. Whiskerson"
        img="img/dog.jpg"
        phone="(212) 542-5698"
        email="miss.whisker@cat.meow"
      />

      <ContactCard
        name="Fluffykins"
        img="img/dog.jpg"
        phone="(342) 456-7423"
        email="fluffykins@dog.haf"
      />

      <ContactCard
        name="Felix"
        img="img/dog.jpg"
        phone="(516) 758-9721"
        email="mr.felix@dog.haf"
      />
    </div>
  );
}

export default App;
