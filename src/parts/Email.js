import React from 'react';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';
import IllustrationEmail from 'assets/images/illustration-email.png'

export default function Email() {
    return (
        <section className="container">
            <Fade left delay={300}>
            <div className="row align-items-center email-box">
                <div className="col-6" style={{marginLeft: '95px'}}>
                    <h4 style={{marginBottom: '20px', fontWeight: '600'}}>Segera Laporkan Prestasimu</h4>
                    <p style={{fontSize: '15px', fontWeight: '300'}}>
                        Apabila anda merupakan mahasiswa aktif Universitas Gunadarma dan telah memenangkan kompetisi, baik lingkup akademik maupun non-akademik. Anda dapat melaporkan data prestasi anda pada button dibawah ini!
                    </p>
                    <Button isExternal type="link" className="btn-email" href="mailto:sektor@gunadarma.ac.id">Lapor</Button>
                </div>
                <div className="col-2" style={{marginRight: '0px', display: 'flex'}}>
                    <img src={IllustrationEmail} alt="illustration-email" style={{width: '370px', marginLeft: '78px'}} />
                </div>
            </div>
            </Fade>
        </section>
    )
}
