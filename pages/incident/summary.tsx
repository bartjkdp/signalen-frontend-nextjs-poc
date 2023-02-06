import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  PrimaryActionButton,
  Heading1,
  PageHeader,
  PageFooter,
  FormField,
  Textbox,
  Paragraph,
  Page,
  PageContent,
  FormLabel,
  LinkButton,
  Textarea,
} from "@utrecht/component-library-react";
import { PageHeaderTemplate } from "@/components/PageHeadertemplate";

export default function VulAan() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    console.log("Submitted");
  };

  return (
    <>
      <Head>
        <title>Meldingen</title>
      </Head>
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
              <PrimaryActionButton type="submit">Verstuur</PrimaryActionButton>
            </form>
          </main>
        </PageContent>
      </Page>
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
    </>
  );
}
