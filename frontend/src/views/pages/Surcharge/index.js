import React from 'react'
import './Surcharge.css'

const index = () => {
  return (
    <>
      <div className='container'>
        <form id='contact'>
          <h1>Formulario de recargo</h1>
          <fieldset>
            <label className='label'>
              <strong>Seguridad</strong>
            </label>
            <input
              className='input'
              placeholder={0}
              type='number'
              tabIndex={1}
              required
            />
          </fieldset>
          <fieldset>
            <label className='label'>
              <strong>Utilidad</strong>
            </label>
            <input
              className='input'
              placeholder={0}
              type='number'
              tabIndex={2}
              required
            />
          </fieldset>
          <fieldset>
            <label className='label'>
              <strong>comisiones</strong>
            </label>
            <input
              className='input'
              placeholder={0}
              type='number'
              tabIndex={3}
              required
            />
          </fieldset>
          <fieldset>
            <label className='label'>
              <strong>Administrativo</strong>
            </label>
            <input
              className='input'
              placeholder={0}
              type='number'
              tabIndex={3}
              required
            />
          </fieldset>
          <fieldset>
            <label className='label'>
              <strong>Total del recargo</strong>
            </label>
            <input
              className='input'
              placeholder={0}
              type='number'
              tabIndex={3}
              required
            />
          </fieldset>
          <fieldset>
            <div className='aliner_boton'>
              <button
                name='submit'
                className='btn btn-primary'
                type='submit'
                id='contact-submit'
                data-submit='...Sending'
              >
                Submit
              </button>
              <button
                name='cancelar'
                className='btn btn-secundary'
                type='cancelar'
                id='contact-cancelar'
                data-submit='...Sending'
              >
                Cancelar
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default index
