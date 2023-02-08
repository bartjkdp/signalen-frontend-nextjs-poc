import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  PrimaryActionButton,
  Heading1,
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
import { Fetcher } from "openapi-typescript-fetch";
import { paths } from '@/client';
import config from '@/config';

export default function Summary() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async () => {
    const fetcher = Fetcher.for<paths>()
    fetcher.configure({ baseUrl:  config.baseUrl })

    const createSignal = fetcher.path('/signals/v1/public/signals').method('post').create()

    const { status, data } = await createSignal({
      text: 'bla',
      incident_date_start: '2020-01-01T00:00:00+00:00',
      category: {
        sub_category: 'http://localhost:8000/signals/v1/public/terms/categories/overig/sub_categories/overig'
      },
      reporter: {
        email: '',
        phone: '',
        sharing_allowed: true
      },
      source: 'online',
      location: {
        address: {
          openbare_ruimte: "Dam",
          huisnummer: 20,
          postcode: "1012NP",
          woonplaats:"Amsterdam"
        },
        geometrie: {
          type: "Point",
          coordinates: [ 4.892263412475587,52.37303159338965 ]
        }
      }
    })

    router.push("/incident/bedankt")
  };

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
                <Heading1>Versturen</Heading1>

                <Paragraph>Samenvatting</Paragraph>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <LinkButton onClick={() => router.push("/incident/contact")}>
                    Vorige
                  </LinkButton>
                  <PrimaryActionButton type="submit">
                    Verstuur
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
