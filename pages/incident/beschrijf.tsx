import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Heading1,
  PageHeader,
  PageFooter,
  FormField,
  Page,
  PageContent,
  FormLabel,
  Paragraph,
  Textarea,
  PrimaryActionButton,
} from "@utrecht/component-library-react";
import { PageHeaderTemplate } from "@/components/PageHeadertemplate";

export default function Beschrijf() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    router.push("/incident/vulaan");
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
            <Heading1>Beschrijf uw melding</Heading1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField>
                <FormLabel htmlFor="description">Waar gaat het om?</FormLabel>
                <p>
                  Typ geen persoonsgegevens in deze omschrijving, dit wordt
                  apart gevraagd
                </p>
                <Textarea
                  id="description"
                  required
                  {...register("description")}
                ></Textarea>
                {errors.descriptionRequired && (
                  <span>This field is required</span>
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="images">Foto&apos;s toevoegen</FormLabel>
                <p>Voeg een foto toe om de situatie te verduidelijken</p>
                <input
                  id="images"
                  type="file"
                  multiple
                  accept="image/jpeg,image/jpg,image/png,image/gif"
                  aria-label="Toevoegen foto"
                  {...register("images")}
                ></input>
              </FormField>

              <PrimaryActionButton type="submit">Volgende</PrimaryActionButton>

              <Paragraph>
                Lukt het niet om een melding te doen? Bel het telefoonnummer 14
                030
              </Paragraph>
              <Paragraph>
                Wij zijn bereikbaar van maandag tot en met vrijdag van 8.30 tot
                17.30 uur en donderdag van 8.30 tot 20.00 uur.
              </Paragraph>
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
