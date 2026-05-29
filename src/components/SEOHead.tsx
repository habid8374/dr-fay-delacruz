import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "HALU - Software Escolar y Plataforma Académica Integral | Gestión Educativa",
  description = "El software escolar líder en Colombia. Automatiza admisiones, gestión académica, convivencia escolar y reportes. Más de 500 instituciones educativas confían en HALU.",
  keywords = "software escolar, plataforma académica, gestión educativa, sistema escolar Colombia, HALU, admisiones escolares, Ley 1620, gestión colegios",
  image = "/halu-uploads/b65d18e6-c27c-41e1-8c79-9c68d460b305.png",
  url = "https://haluplataform.com",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="HALU - haluplataformaescolar@gmail.com" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="es-CO" />
      <meta name="geo.region" content="CO" />
      <meta name="geo.country" content="Colombia" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="HALU" />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="HALU" />
      <link rel="apple-touch-icon" href={image} />
      <link rel="canonical" href={url} />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* Schema.org structured data */}
      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W35FZ6HZ');
        `}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "HALU",
          "description": description,
          "url": url,
          "logo": image,
          "applicationCategory": "EducationalApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "COP",
            "description": "Demo gratuita disponible"
          },
          "provider": {
            "@type": "Organization",
            "name": "HALU",
            "url": url,
            "logo": image,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+57-324-6868538",
              "contactType": "customer service",
              "email": "haluplataformaescolar@gmail.com"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;