import React from 'react'
import { SlScreenDesktop } from 'react-icons/sl'

export default function Schedule() {
  return (
    <>
     <div className="d-flex w-fluid align-items-center py-1">
                <div>09:00</div>
                <div
                  className="ms-4 w-100 rounded"
                  style={{ background: '#DDDDDD' }}
                >
                  <div className="d-flex flex-column-reverse flex-sm-row  justify-content-between p-2">
                    <div className="d-flex">
                      <div
                        className="align-self-center px-2 py-1 rounded me-3"
                        style={{ background: '#EEEEEE' }}
                      >
                        <SlScreenDesktop size={15} />
                      </div>
                      <div>
                        <h6 className="m-0">Enlish Lesson</h6>
                        <p className="m-0">8:30-9:00</p>
                      </div>
                    </div>
                    <div className="align-self-center fs-5 fw-bold me-sm-4">
                      Angkor Wet
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}
