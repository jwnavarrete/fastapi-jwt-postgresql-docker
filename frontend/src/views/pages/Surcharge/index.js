import React from 'react'
import './Surcharge.css'
import Title from '@components/ui/Title'
import Input from '@components/ui/Input'

const index = () => {
  return (
    <>
      <div className='container'>
        <div className='contact'>
          <h3>Formulario de recargo</h3>
          <form>
            <div className='form-group'>
              <label className='label'>Seguridad</label>
              <Input placeholder={0} type='number' tabIndex={1} />
            </div>
            <div className='form-group'>
              <label className='label'>Utilidad</label>
              <Input placeholder={0} type='number' tabIndex={2} />
            </div>
            <div className='form-group'>
              <label className='label'>comisiones</label>
              <Input placeholder={0} type='number' tabIndex={3} />
            </div>
            <div className='form-group'>
              <label className='label'>Administrativo</label>
              <Input placeholder={0} type='number' tabIndex={3} />
            </div>
            <div className='form-group'>
              <label className='label'>Total del recargo</label>
              <Input placeholder={0} type='number' tabIndex={3} />
            </div>
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
      </div>
    </>
  )
}

export default index
