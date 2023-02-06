/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import Link from "next/link";

import {
  BreadcrumbNav,
  BreadcrumbLink,
  Paragraph,
} from "@utrecht/component-library-react";

import { UtrechtLogo } from "./UtrechtLogo";
import { HeaderNav, HeaderNavLink } from "./HeaderNav";

export const PageHeaderTemplate = () => (
  <>
    <Paragraph className="utrecht-page-header__logo">
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </Paragraph>

    <BreadcrumbNav
      className="utrecht-page-header__breadcrumb-nav"
      appearance="arrows"
    >
      {[
        {
          href: "https://utrecht.nl/",
          textContent: "Home",
        },
        {
          href: "https://pki.utrecht.nl/Loket/start.do",
          textContent: "Online loket",
        },
        {
          href: "https://pki.utrecht.nl/Loket/products/alphabet",
          textContent: "Producten",
        },
      ].map(({ href, textContent }, index) => (
        <BreadcrumbLink key={index} index={index} href={href}>
          {textContent}
        </BreadcrumbLink>
      ))}
    </BreadcrumbNav>
  </>
);
