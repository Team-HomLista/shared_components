import { Card, CardContent } from "@shared/components/ui/card";
import { Badge } from "@shared/components/ui/badge";
import { Cookie, Shield, Settings, Users, Mail } from "lucide-react";

const Cookies = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h1 className="text-primary mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Política de Cookies
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg">
            En HomLista valoramos tu privacidad y queremos que entiendas cómo
            utilizamos las cookies para mejorar tu experiencia.
          </p>
          <Badge variant="secondary" className="mt-4 text-xs sm:text-sm">
            Última actualización: 23/06/2025
          </Badge>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl space-y-6 sm:space-y-8">
          {/* What are cookies */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <Cookie className="text-primary h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <h2 className="text-primary text-xl font-bold sm:text-2xl">
                  1. ¿Qué son las cookies?
                </h2>
              </div>
              <p className="text-foreground text-sm leading-relaxed sm:text-base">
                Las <strong>cookies</strong> son pequeños archivos de texto que
                se almacenan en su dispositivo (ordenador, tablet o móvil)
                cuando visita un sitio web. Sirven para recordar sus
                preferencias, mejorar su experiencia de navegación y recopilar
                información estadística.
              </p>
            </CardContent>
          </Card>

          {/* Types of cookies */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <Settings className="text-primary h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <h2 className="text-primary text-xl font-bold sm:text-2xl">
                  2. ¿Qué tipos de cookies utilizamos?
                </h2>
              </div>
              <p className="text-foreground mb-4 text-sm sm:mb-6 sm:text-base">
                HomLista utiliza las siguientes categorías de cookies:
              </p>

              <div className="space-y-4 sm:space-y-6">
                {/* Strictly necessary */}
                <div className="border-primary border-l-4 pl-4 sm:pl-6">
                  <h3 className="text-primary mb-2 text-lg font-semibold sm:text-xl">
                    2.1 Cookies estrictamente necesarias
                  </h3>
                  <p className="text-foreground mb-2 text-sm sm:text-base">
                    Necesarias para el funcionamiento básico de la plataforma
                    (ej. inicio de sesión, navegación segura).
                  </p>
                  <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm">
                    No requieren consentimiento
                  </Badge>
                </div>

                {/* Performance cookies */}
                <div className="border-secondary border-l-4 pl-4 sm:pl-6">
                  <h3 className="text-primary mb-2 text-lg font-semibold sm:text-xl">
                    2.2 Cookies de rendimiento y analíticas
                  </h3>
                  <p className="text-foreground mb-3 text-sm sm:text-base">
                    Permiten analizar el uso del sitio (ej. páginas más
                    visitadas, tiempo de navegación).
                  </p>
                  <p className="text-foreground mb-2 text-sm sm:text-base">
                    <strong>Herramientas utilizadas:</strong>
                  </p>
                  <ul className="text-foreground list-inside list-disc space-y-1 text-sm sm:text-base">
                    <li>
                      <strong>Google Analytics</strong>
                    </li>
                    <li>
                      <strong>Pixel de Meta (Facebook/Instagram)</strong>
                    </li>
                  </ul>
                </div>

                {/* Functionality cookies */}
                <div className="border-muted border-l-4 pl-4 sm:pl-6">
                  <h3 className="text-primary mb-2 text-lg font-semibold sm:text-xl">
                    2.3 Cookies de funcionalidad
                  </h3>
                  <p className="text-foreground mb-2 text-sm sm:text-base">
                    Mejoran la experiencia (guardar idioma, preferencias,
                    ubicación).
                  </p>
                  <p className="text-foreground text-sm italic sm:text-base">
                    Ejemplo: recordamos tu país para mostrarte inmuebles
                    locales.
                  </p>
                </div>

                {/* Marketing cookies */}
                <div className="border-accent border-l-4 pl-4 sm:pl-6">
                  <h3 className="text-primary mb-2 text-lg font-semibold sm:text-xl">
                    2.4 Cookies de marketing y publicidad
                  </h3>
                  <p className="text-foreground mb-2 text-sm sm:text-base">
                    Se usan para mostrarte anuncios personalizados dentro y
                    fuera de HomLista.
                  </p>
                  <p className="text-foreground text-sm italic sm:text-base">
                    Ejemplo: campañas publicitarias a través de Meta Ads y
                    Google Ads.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third party cookies */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <Users className="text-primary h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <h2 className="text-primary text-xl font-bold sm:text-2xl">
                  3. Cookies propias y de terceros
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-foreground text-sm sm:text-base">
                    <strong>• Cookies propias:</strong> gestionadas directamente
                    por HomLista.
                  </p>
                </div>
                <div>
                  <p className="text-foreground text-sm sm:text-base">
                    <strong>• Cookies de terceros:</strong> gestionadas por
                    servicios como Google, Meta, Hotjar, etc., que pueden
                    recopilar información sobre tu navegación y comportamiento
                    para sus propias finalidades.
                  </p>
                </div>
                <div className="bg-muted rounded-lg p-3 sm:p-4">
                  <p className="text-foreground text-sm sm:text-base">
                    <>HomLista </>
                    <strong>
                      no controla directamente los datos recopilados por
                      terceros
                    </strong>
                    . Te recomendamos revisar sus respectivas políticas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie management */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="mb-4 flex items-center gap-3 sm:mb-6">
                <Shield className="text-primary h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <h2 className="text-primary text-xl font-bold sm:text-2xl">
                  4. ¿Cómo puedes gestionar tus cookies?
                </h2>
              </div>
              <p className="text-foreground mb-4 text-sm sm:mb-6 sm:text-base">
                Puedes configurar tus preferencias en cualquier momento:
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                    Desde nuestro sitio:
                  </h3>
                  <ul className="text-foreground list-inside list-disc space-y-2 text-sm sm:text-base">
                    <li>
                      <>Al ingresar por primera vez, verás un </>
                      <strong>banner de consentimiento</strong>.
                    </li>
                    <li>
                      Puedes aceptar todas, rechazarlas o personalizarlas.
                    </li>
                    <li>
                      <>Puedes cambiar tu configuración desde el </>
                      <strong>botón de cookies en el pie de página</strong>.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-primary mb-3 text-lg font-semibold sm:text-xl">
                    Desde tu navegador:
                  </h3>
                  <p className="text-foreground mb-3 text-sm sm:text-base">
                    Puedes eliminar o bloquear cookies desde la configuración de
                    tu navegador (Chrome, Safari, Firefox, Edge, etc.).
                  </p>
                  <div className="bg-destructive/10 border-destructive/20 rounded-lg border p-3 sm:p-4">
                    <p className="text-foreground text-sm sm:text-base">
                      <>Ten en cuenta que </>
                      <strong>
                        bloquear cookies esenciales puede afectar el
                        funcionamiento del sitio
                      </strong>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* International transfer */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
                5. Transferencia internacional de datos
              </h2>
              <p className="text-foreground mb-4 text-sm sm:text-base">
                <>
                  Algunas cookies procesan datos fuera de México (principalmente
                  en EE.UU.), en servidores de proveedores como{" "}
                </>
                <strong>Google, Meta y Vercel</strong>.
              </p>
              <p className="text-foreground text-sm sm:text-base">
                <>
                  HomLista garantiza que estas transferencias cumplen con
                  las{" "}
                </>
                <strong>cláusulas contractuales tipo del RGPD</strong>, acuerdos
                equivalentes o medidas de seguridad compatibles con la LFPDPPP.
              </p>
            </CardContent>
          </Card>

          {/* Policy changes */}
          <Card className="border shadow-sm">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h2 className="text-primary mb-4 text-xl font-bold sm:mb-6 sm:text-2xl">
                6. Cambios en esta Política
              </h2>
              <p className="text-foreground text-sm sm:text-base">
                Podemos actualizar esta política en cualquier momento. Las
                modificaciones sustanciales serán notificadas mediante el banner
                de cookies o por correo electrónico si corresponde.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-primary border shadow-sm">
            <CardContent className="p-4 text-center sm:p-6 lg:p-8">
              <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Mail className="text-primary-foreground h-5 w-5 flex-shrink-0 sm:h-6 sm:w-6" />
                <h2 className="text-primary-foreground text-xl font-bold sm:text-2xl">
                  7. Contacto
                </h2>
              </div>
              <p className="text-primary-foreground mb-4 text-sm sm:text-base">
                Para cualquier duda sobre esta Política o el uso de cookies:
              </p>
              <Badge
                variant="secondary"
                className="bg-background text-primary px-4 py-2 text-xs font-semibold break-all sm:px-6 sm:text-sm sm:break-normal"
              >
                hola@homlista.com
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-8 px-4 text-center sm:mt-12">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 HomLista - Haciendo que encontrar tu hogar ideal sea más
            fácil y personal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
