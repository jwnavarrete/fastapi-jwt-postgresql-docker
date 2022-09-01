import React from 'react'
import './Surcharge.css'
import Container from '@components/ui/Container'
import Box from '@components/ui/Box'
import Title from '@components/ui/Title'

const index = () => {
  return (
    <>
      <Container>
        <Box className="contact">
          <form>
            <h3>Formulario de recargo</h3>
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
        </Box>
      </Container>
    </>
  )
}

export default index
