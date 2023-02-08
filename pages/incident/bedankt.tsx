import Head from "next/head";
import { useContext } from "react";
import { useRouter } from "next/router";
import {
  PrimaryActionButton,
  Heading1,
  Heading2,
  PageHeader,
  PageFooter,
  Paragraph,
  Page,
  PageContent,
  LinkButton,
  Document,
  Surface,
} from "@utrecht/component-library-react";
import { PageHeaderTemplate } from "@/components/PageHeadertemplate";
import SignalContext from "@/contexts/signal";

export default function Bedankt() {
  const router = useRouter();
  const [signal, setSignal] = useContext(SignalContext);

  return (
    <>
      <Head>
        <title>Meldingen</title>
      </Head>
      <Surface>
        <Document>
          <Page>
            <PageHeader>
              <PageHeaderTemplate />
            </PageHeader>
            <PageContent>
              <main>
                <Heading1>Bedankt!</Heading1>

                <Paragraph>
                  Uw melding is bij ons bekend onder nummer: SIG-12.
                </Paragraph>
                <Paragraph>
                  Hebt u een e-mailadres ingevuld? Dan ontvangt u een e-mail met
                  alle gegevens van uw melding.
                </Paragraph>

                <Heading2>Wat doen we met uw melding?</Heading2>
                <Paragraph>
                  Uw melding wordt ingepland: wij laten u binnen 5 werkdagen
                  weten hoe en wanneer uw melding wordt afgehandeld. Dat doen we
                  via e-mail.
                </Paragraph>

                <PrimaryActionButton
                  onClick={() => router.push("/incident/beschrijf")}
                >
                  Doe een melding
                </PrimaryActionButton>
              </main>
            </PageContent>
            <PageFooter>
              <address className="utrecht-page-footer__address utrecht-page-footer__address--reset-address">
                <h2 className="utrecht-heading-2 utrecht-heading-2--reset-h2">
                  Gemeente Utrecht
                </h2>
                <section>
                  <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">
                    Telefoon
                  </h3>
                  <p className="utrecht-paragraph utrecht-paragraph--distanced">
                    <a
                      href="tel:+31302860000"
                      className="utrecht-link utrecht-link--telephone"
                    >
                      14 030
                    </a>
                  </p>
                </section>
                <section>
                  <h3 className="utrecht-heading-3 utrecht-heading-3--distanced">
                    Adres
                  </h3>
                  <p className="utrecht-paragraph utrecht-paragraph--distanced">
                    <strong>Stadskantoor</strong>
                    <br />
                    Stadsplateau 1<br />
                    3521AZ Utrecht
                  </p>
                </section>
              </address>
            </PageFooter>
          </Page>
        </Document>
      </Surface>
    </>
  );
}
