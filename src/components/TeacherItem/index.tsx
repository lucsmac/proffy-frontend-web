import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/55163413?s=460&u=4efcc2eba0c8f0ae229b2ea9c0ace6d18cb0a55f&v=4" alt="Lucas Macedo" />
        <div>
          <strong>Lucas Macedo</strong>
          <span>Engenharia de software</span>
        </div>
      </header>

      <p>
        Entusiasta no desenvolvimento de softwares de alto rendimento.
        <br /><br />
        Apaixonado por transformar vidas através da tecnologia, em busca de novas conquistas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 750,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em contato" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
