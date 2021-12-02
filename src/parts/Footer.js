import React from 'react';
import Button from 'elements/Button';
import IconText from './IconText';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-6 mr-5">
                        <IconText />
                        <p className="brand-tagline">
                            Temukan gerakan dan inovasi mahasiswa yang telah berhasil menuliskan sejarah baru bagi Universitas Gunadarma
                        </p>
                        <div className="copyrights" style={{marginTop: '50px'}}>
                        Copyright 2021 x All rights reserved x Mapres UG
                    </div>
                    </div>
                    <div className="col-auto ml-5">
                        <h6 className="mt-2" style={{marginLeft: '19px'}}>Kontak Kami</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:sektor@gunadarma.ac.id">sektor@gunadarma.ac.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" href="tel:+622178881112">021-78881112/021-29428935</Button>
                            </li>
                            <li className="list-group-item">
                                <Button isExternal type="link" target="_blank" href="https://www.google.co.id/maps/place/Kemang,+Cipete+Sel.,+Kec.+Cilandak,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta/@-6.2777619,106.8026676,15z/data=!3m1!4b1!4m5!3m4!1s0x2e69f18ca27987dd:0x6a032aaca638c397!8m2!3d-6.2777834!4d106.8114224">Jl. Margonda Raya 100, Depok, Jawa Barat</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
