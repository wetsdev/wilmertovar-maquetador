import { useState } from "react";
import "./../styles/contact.css";

export function Contact({ id }) {

  const sendform = (e)=> {
    e.preventDefault()
    let name = document.getElementById("inptname").value
    let email = document.getElementById("inptemail").value
    let razon = document.getElementById("razon").value
    let descripcion = document.getElementById("descripcion").value
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (name === "" || email === "" || razon === "DEFAULT" || descripcion === "") {
    alert("Por favor complete el formulario")
    }
    else if (!validEmail.test(email)) {
    alert("Introduzca una dirección de email válida")
    }
    else if (!document.getElementById('check').checked) {
      alert("Por favor acepte nuestros Términos legales")
    }
    else{
      alert("Ha sido enviado, pronto nos comunicaremos contigo.")
      document.getElementById('contactform').reset();
    }
  }

  const [stateiptname, setStateiptname] = useState("i");
  const [stateiptemail, setStateiptemail] = useState("i");
  const [stateiptdes, setStateiptdes] = useState("i");


  return (
    <div id={id}>
      <div className="flex-container" data-scroll
          data-scroll-speed="-1"
          data-scroll-position="center">
        <div className="flex-item-left txt-l">
          <h1 className="title-mix">
            Disfruta de la <br />
            <span>mejor música</span>
          </h1>
          <p className="p-24">
            Escríbenos en el siguiente formulario y un
            <br /> asesor se pondrá en contacto contigo.
          </p>
        </div>
        <div className="flex-item-right">
        <form onSubmit={sendform} id="contactform">
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Nombre" name="inptname" id='inptname' onChange={(e) => { setStateiptname(e.target.value)}} />
            <label htmlFor="name" className={stateiptname === "" ? "form__label empty" : "form__label"}>Nombre</label>
        </div>
        <div className="form__group field">
            <input type="input" className="form__field" placeholder="Email" name="inptemail" id='inptemail' onChange={(e) => { setStateiptemail(e.target.value)}}/>
            <label htmlFor="name" className={stateiptemail === "" ? "form__label empty" : "form__label"}>Email</label>
        </div>
        <div className="form__group field">
        <select defaultValue={'DEFAULT'} id="razon" name="razon" className="form__field__select">
            <option value="DEFAULT" disabled>Razon</option>
            <option value="colaboración">Colaboración</option>
            <option value="incidencia">Incidencia</option>
            <option value="otros">Otros</option>
        </select>
        </div>
        <div className="form__group field">
        <label htmlFor="name" className={stateiptdes === "" ? "form__label__textarea empty" : "form__label__textarea"}>Descripción</label>
        <textarea className="form__field__textarea" name="descripcion" id='descripcion' onChange={(e) => { setStateiptdes(e.target.value)}}></textarea>
        </div>

        <input type="checkbox" id="check" name="check"/>
        <label htmlFor="check" id="legal">Acepto las <a href="https://www.spotify.com/ve-es/legal/end-user-agreement/" target="_blank" rel="noreferrer">condiciones legales</a></label>

          <button className="btn-intro btn-right">
            <span>Enviar</span>
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
