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
  Page,
  PageContent,
  FormLabel,
  LinkButton,
  Textarea,
  Paragraph,
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
  const onSubmit = (data) => {
    router.push("/incident/summary");
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
            <Heading1>Contactgegevens</Heading1>

            <Paragraph>
              Vaak hebben we nog een vraag. Daarmee kunnen we het probleem
              sneller of beter oplossen. Of we willen iets uitleggen. Wij willen
              u dan graag even bellen. Of anders e-mailen wij u.
            </Paragraph>
            <Paragraph>
              Wij gebruiken uw telefoonnummer en e-mailadres alléén voor deze
              melding.
            </Paragraph>

            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <FormLabel htmlFor="description">
                  Wat is het telefoonnummer? (niet verplicht)
                </FormLabel>
                <Textbox
                  id="phone"
                  type="tel"
                  autoComplete="search_tel"
                  {...register("phone")}
                ></Textbox>
              </FormField>

              <FormField>
                <FormLabel htmlFor="description">
                  Wat is uw e-mailadres? (niet verplicht)
                </FormLabel>
                <Textbox
                  id="email"
                  type="email"
                  autoComplete="search_email"
                  {...register("email")}
                ></Textbox>
              </FormField>

              <LinkButton onClick={() => router.push("/incident/vulaan")}>
                Vorige
              </LinkButton>
              <PrimaryActionButton type="submit">Volgende</PrimaryActionButton>
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
