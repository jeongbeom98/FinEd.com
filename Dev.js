import React from 'react';
import Navbar from './Navbar';

function Dev() {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h1 className="h3 mb-0">Under Development</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dev