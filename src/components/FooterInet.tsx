import logoInet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function FooterInet() {
  return (
    <footer className="py-2 px-5 bg-[var(--color-blue)]">

      <div className="container columns-6">
        <div className="row">
          <div className="col-sm-2 text-center">
            <img src="https://www.inet.edu.ar/wp-content/themes/inet/img/logo-inet2.png" alt="Logo Inet" width="200px" className="img-responsive" />
            <hr />
            <p className="text-center">Saavedra 789 - C1229ACE<br />Tel. (+54) 11 4129-2000</p>
            <hr />
            <h4>Redes Sociales</h4>
            <a href="http://www.facebook.com/INET.ETP" className="social" target="_blank"><i className="fa fa-2x fa-facebook"></i></a> <a href="http://twitter.com/INETetp" target="_blank" className="social"><i className="fa fa-2x fa-twitter"></i></a> <a href="http://www.youtube.com/channel/UCKpd-B8McDUTwc_3kbZm18g" target="_blank" className="social"><i className="fa fa-2x fa-youtube-play"></i></a> <a href="http://www.instagram.com/inet_etp/" target="_blank" className="social"><i className="fa fa-2x fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@inetetp" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" className="fa fa-2x" height="1em" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg></a>





            <hr />
            <img src="https://www.inet.edu.ar/wp-content/themes/inet/img/ministerio.png" alt="Ministerio" width="250px" className="img-responsive" />
          </div>
          <div className="col-xs-6 col-sm-2 col-sm-offset-1">
            <h4><a href="http://www.inet.edu.ar/index.php/asuntos-federales/">Asuntos Federales</a></h4>
            <ul className="list-unstyled">
              <li><a href="http://www.inet.edu.ar/index.php/asuntos-federales/comision-federal/">Comisión Federal</a></li>
              <li><a href="http://www.inet.edu.ar/index.php/asuntos-federales/planes-de-mejora-de-la-etp/">Planes de Mejora</a></li>
              <li><a href="http://www.inet.edu.ar/index.php/asuntos-federales/programa-clan-capacitacion-laboral-de-alcance-nacional/">Programa CLAN</a></li>
              <li><a href="http://www.inet.edu.ar/index.php/asuntos-federales/infraestructura/">Infraestructura</a></li>
            </ul>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-xs-6 col-sm-4">
                <h4><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/">Secundario Técnico</a></h4>
                <ul className="list-unstyled">
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/practicas-profesionalizantes/">Prácticas Profesionalizantes</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/olimpiadas-nacionales-de-construcciones-y-electromecanica/">Encuentros Educativos</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/marcos-de-referencia-de-nivel-secundario/">Marcos de Referencia</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/formacion-docente-inicial/">Formación Docente Inicial</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-secundaria-tecnica/finestec/">FinEsTec</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-4">
                <h4><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-superior-tecnica/">Educación Superior</a></h4>
                <ul className="list-unstyled">
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/educacion-superior-tecnica/marcos-de-referencia-de-nivel-superior/">Marcos de Referencia</a></li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-4">
                <h4><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/">Formación Profesional</a></h4>
                <ul className="list-unstyled">
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/cursos-de-capacitacion/">Cursos de Capacitación</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/pretis/">Construir Inclusión</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/programa-federal-de-asistencia-tecnica-institucional-y-jurisdiccional/">Asistencia Técnica</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/marcos-de-referencia-de-formacion-profesional/">Marcos de Referencia</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/mesa-federal-de-trabajo-permanente-para-la-formacion-profesional/">Mesa Federal</a></li>
                  <li><a href="http://www.inet.edu.ar/index.php/niveles-educativos/formacion-profesional/programa-federal-de-aulas-tecnicas-moviles/">Aulas Talleres Móviles</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="color-white">
            <h4 className="text-2xl"><a href="http://www.inet.edu.ar/index.php/normativa/">Normativa</a></h4>
            <h4><a href="http://www.inet.edu.ar/index.php/institucional/conetyp/">CoNETyP</a></h4>
            <h4><a href="http://www.inet.edu.ar/index.php/institucional/credito-fiscal/">Crédito Fiscal</a></h4>
            <h4><a href="http://www.inet.edu.ar/index.php/material-de-capacitacion/">Biblioteca</a></h4>
            <h4><a href="http://catalogo-inet.educacion.gob.ar/">Catálogo de Títulos</a></h4>

          </div>

        </div>
      </div>
    </footer>
  );
}
