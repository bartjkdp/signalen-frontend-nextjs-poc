import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  PrimaryActionButton,
  Heading1,
  PageHeader,
  PageFooter,
  FormField,
  Surface,
  Document,
  Page,
  PageContent,
  FormLabel,
  LinkButton,
} from "@utrecht/component-library-react";
import { PageHeaderTemplate } from "@/components/PageHeadertemplate";
import Map from "@/components/Map";

export default function VulAan() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    router.push("/incident/contact");
  };

  const [showLocation, setShowLocation] = useState(false);

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
                <Heading1>Locatie en vragen</Heading1>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormField>
                    <FormLabel htmlFor="description">Waar is het?</FormLabel>
                    <PrimaryActionButton
                      type="button"
                      onClick={() => setShowLocation(true)}
                    >
                      Kies een locatie
                    </PrimaryActionButton>
                  </FormField>

                  {showLocation && (
                    <Map onClose={() => setShowLocation(false)} />
                  )}

                  <LinkButton
                    onClick={() => router.push("/incident/beschrijf")}
                  >
                    Vorige
                  </LinkButton>
                  <PrimaryActionButton type="submit">
                    Volgende
                  </PrimaryActionButton>
                </form>
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
