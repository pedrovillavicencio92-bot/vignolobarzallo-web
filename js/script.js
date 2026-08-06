(() => {
  'use strict';

  // ============================================================
  // Data
  // ============================================================

  const teamMembers = {
    alex: { name: 'Alex Vignolo Salvo', roleKey: 'doctor', credential: 'Doctor en Jurisprudencia · Asesor Comercial', areas: 'Derecho Comercial, Asesoría Corporativa', photo: 'team-alex.webp', email: 'avignolo@vignolobarzallo.com' },
    mariabarzallo: {
      name: 'María Augusta Barzallo Seade', roleKey: 'doctora',
      email: 'ma.barzallo@vignolobarzallo.com',
      credential: 'Doctora en Jurisprudencia, Universidad de Cuenca',
      areas: 'Derecho Civil, Derecho de Familia', photo: 'team-mariabarzallo.webp',
      bio: 'Doctora en Jurisprudencia y Abogada de los Tribunales de Justicia por la Universidad de Cuenca, Licenciada en Ciencias Políticas y Sociales, con Máster en Asesoría Jurídica de Empresas por la Universidad del Azuay y la Universitat de Valencia, y Diploma Superior en Derecho Constitucional y Derechos Fundamentales por la Universidad de Cuenca. Dirige el Estudio Jurídico Vignolo Barzallo desde 1992. Ha sido docente de Derecho Laboral, Seguridad Social y Derecho Civil de Bienes en la Universidad de Cuenca, jueza suplente del Juzgado Sexto de lo Penal del Azuay y jefa del Departamento Legal del Banco Continental. Es autora del libro «Análisis del Derecho Laboral Ecuatoriano» (2012) y ha sido Vicepresidenta del Colegio de Abogados del Azuay y de la Cámara de la Pequeña Industria del Azuay.',
      resume: {
        educacion: {
          universitaria: ['Doctora en Jurisprudencia y Abogada de los Tribunales de Justicia, Universidad de Cuenca', 'Licenciada en Ciencias Políticas y Sociales, Universidad de Cuenca'],
          postgrados: ['Máster en Asesoría Jurídica de Empresas, Universidad del Azuay / Universitat de Valencia (España)', 'Diploma Superior en Derecho Constitucional y Derechos Fundamentales, Universidad de Cuenca']
        },
        docencia: ['Docente de Derecho Laboral, Seguridad Social y Derecho Civil de Bienes, Universidad de Cuenca'],
        publicaciones: ['Análisis del Derecho Laboral Ecuatoriano — Teoría, Doctrina y Jurisprudencia, Editorial Carpol, 2012'],
        membresias: ['Vicepresidenta, Colegio de Abogados del Azuay (2016-2018)', 'Vicepresidenta, Cámara de la Pequeña Industria del Azuay (2020-2026)']
      }
    },
    giancarlo: {
      name: 'Giancarlo Vignolo Barzallo', roleKey: 'socio',
      email: 'giancarlo@vignolobarzallo.com',
      credential: 'Máster en Derecho Penal, Universidad del Azuay',
      areas: 'Derecho Penal y Mediación', photo: 'team-giancarlo.webp',
      bio: 'Abogado de los Tribunales de la República por la Universidad del Azuay, con Máster en Derecho Penal por la misma universidad y acreditación como mediador por el Centro de Arbitraje y Mediación de las Cámaras de Producción del Azuay. Dirige el departamento de Derecho Penal del Estudio Jurídico Vignolo Barzallo. Ha ejercido en la Unidad de Flagrancia de la Fiscalía General del Estado y en el Departamento Legal de la Contraloría General del Estado, y ha sido expositor en congresos y seminarios sobre litigación oral y peritaje psicológico forense.',
      resume: {
        educacion: {
          universitaria: ['Abogado de los Tribunales de la República del Ecuador, Universidad del Azuay'],
          postgrados: ['Máster en Derecho Penal, Universidad del Azuay'],
          especialidades: ['Mediador, Centro de Arbitraje y Mediación de las Cámaras de Producción del Azuay']
        },
        docencia: ['Profesor Ad-honórem, Maestría en Psicología Forense y Peritaje Psicológico, Pontificia Universidad Católica del Ecuador']
      }
    },
    mariaaugusta: {
      name: 'Maria Augusta Vignolo Barzallo', roleKey: 'socia',
      email: 'ma.vignolo@vignolobarzallo.com',
      credential: 'Máster en Derecho de la Empresa, Universidad de Valencia',
      areas: 'Derecho Empresarial, Laboral y Seguridad Social', photo: 'team-mariaaugusta.webp',
      bio: 'Abogada de los Tribunales de la República por la Universidad del Azuay y Máster en Derecho de la Empresa (Asesoría Mercantil, Laboral y Fiscal) por la Universidad de Valencia, España. Su práctica se concentra en el ámbito empresarial, laboral, societario y de seguridad social, además de derecho de familia. Es Gerente General de MALIS S.A.S., subsidiaria en Ecuador de una compañía en Estados Unidos, y se ha desempeñado como asesora jurídica en la Gobernación del Azuay y la Intendencia de Policía. Fue delegada principal a la Asamblea Provincial y Nacional de Abogados del Ecuador y es socia fundadora del Club Rotario Santa Ana de los Ríos de Cuenca.',
      resume: {
        educacion: {
          universitaria: ['Abogada de los Tribunales de la República, Universidad del Azuay'],
          postgrados: ['Máster en Derecho de la Empresa, Asesoría Mercantil, Laboral y Fiscal, Universidad de Valencia (España)']
        },
        membresias: ['Delegada principal, Asamblea Provincial y Nacional de Abogados del Ecuador (2016-2018)', 'Socia fundadora, Club Rotario Santa Ana de los Ríos de Cuenca']
      }
    },
    eugenio: {
      name: 'Eugenio Stanculescu Moreno', roleKey: 'socio',
      email: 'eugenio@vignolobarzallo.com',
      credential: 'Máster en Derecho de los Negocios Internacionales, Madrid',
      areas: 'Derecho Tributario, Empresarial y Seguros', photo: 'team-eugenio.webp',
      bio: 'Abogado de los Tribunales de Justicia por la Universidad del Azuay y Máster en Derecho de los Negocios Internacionales por la Universidad Complutense de Madrid. Se especializa en asesoría fiscal tributaria nacional e internacional, así como en Derecho Empresarial y de Seguros. Es asesor jurídico tributario y empresarial de la Cámara de la Pequeña Industria del Azuay (CAPIA) desde 2019, y ha asesorado a empresas como Banco Pichincha, LAC Línea Aérea Cuencana y la Cámara de Comercio Ecuatoriano Americana de Cuenca, entre otras. Ha sido ponente en múltiples seminarios sobre reformas tributarias y es autor de varios artículos sobre paraísos fiscales y reforma tributaria en Ecuador.',
      resume: {
        educacion: {
          universitaria: ['Abogado de los Tribunales de Justicia de la República, Universidad del Azuay'],
          postgrados: ['Máster en Derecho de los Negocios Internacionales, Universidad Complutense de Madrid (España)']
        },
        publicaciones: [
          'Análisis del Régimen Jurídico de las embarcaciones y su conflicto con regulaciones laxas ofertadas por estados paraísos fiscales, Universidad Complutense de Madrid, 2018',
          'Análisis de la Reforma Tributaria Ecuador: Ley Orgánica para el Equilibrio de las Finanzas Públicas, Boletín legal de Gottifredi Pozo, 2016',
          'Hablemos de paraísos fiscales, los Panamá Papers y los Estados offshore, Boletín legal de Gottifredi Pozo, 2016'
        ],
        membresias: ['Asesor Jurídico Tributario y Empresarial, Cámara de la Pequeña Industria del Azuay (CAPIA), desde 2019']
      }
    },
    gabriela: {
      name: 'Gabriela Zambrano Jaramillo', roleKey: 'socia',
      email: 'gzambrano@vignolobarzallo.com',
      credential: 'Máster en Derecho de la Empresa, Universidad Andina Simón Bolívar',
      areas: 'Derecho Empresarial y Protección de Datos Personales', photo: 'team-gabriela.webp',
      bio: 'Abogada de los Tribunales de Justicia y Licenciada en Ciencias Políticas y Sociales por la Universidad de Cuenca, con Especialidad Superior y Máster en Derecho de la Empresa por la Universidad Andina Simón Bolívar. Es Delegada de Protección de Datos Personales de la Universidad de Cuenca (UCUENCA EP) y docente en la Maestría en Derecho Digital, mención Innovación Legal y Entorno Digital, de la Universidad de los Hemisferios. Mediadora calificada por el Consejo de la Judicatura, ha sido inspectora de trabajo en el Ministerio del Trabajo y abogada externa del IESS, y es socia fundadora de los estudios jurídicos Altac Legal y Abocacía.',
      resume: {
        educacion: {
          universitaria: ['Abogada de los Tribunales de Justicia y Licenciada en Ciencias Políticas y Sociales, Universidad de Cuenca'],
          postgrados: ['Máster en Derecho de la Empresa, Universidad Andina Simón Bolívar', 'Especialista Superior en Derecho de la Empresa, Universidad Andina Simón Bolívar', 'Diplomado Internacional en Derecho Laboral Público y Privado, Instituto Latinoamericano de Investigación y Capacitación Jurídica'],
          especialidades: ['Gestión de la Protección de Datos Personales – DPO, Universidad Andina Simón Bolívar', 'Delegada de Protección de Datos Personales, Universidad Central del Ecuador', 'Mediadora, calificada por el Consejo de la Judicatura']
        },
        docencia: ['Docente, Maestría en Derecho Digital mención Innovación Legal y Entorno Digital, Universidad de los Hemisferios'],
        membresias: ['Socia fundadora, Altac Legal Estudio Jurídico', 'Socia fundadora, Abocacía Estudio Jurídico']
      }
    },
    pedro: {
      name: 'Pedro José Córdova López', roleKey: 'socio',
      email: 'pcordova@vignolobarzallo.com',
      credential: 'Máster en Derecho Procesal, Universidad Andina Simón Bolívar',
      areas: 'Litigios y Resolución de Conflictos', photo: 'team-pedro.webp',
      bio: 'Abogado y Licenciado en Ciencias Políticas por la Universidad de Cuenca, con Especialidad Superior y Máster Profesional en Derecho Procesal por la Universidad Andina Simón Bolívar. Su práctica se enfoca en la planificación de litigios complejos y la asesoría a compañías nacionales e internacionales en negociaciones y procesos judiciales. Ha ejercido tanto en el sector público como privado, con experiencia en la Asamblea Nacional, el Ministerio del Trabajo y estudios jurídicos en Quito. Actualmente es profesor invitado en la carrera de Derecho de la UTPL y cursa la Maestría en Derecho Administrativo con mención en Contratación Pública en la Universidad de Especialidades Espíritu Santo.',
      resume: {
        educacion: {
          universitaria: ['Abogado y Licenciado en Ciencias Políticas, Universidad de Cuenca'],
          postgrados: [
            'Especialista Superior en Derecho Procesal, Universidad Andina Simón Bolívar',
            'Máster Profesional en Derecho Procesal, Universidad Andina Simón Bolívar',
            'Candidato a Máster en Derecho Administrativo con mención en Contratación Pública, Universidad de Especialidades Espíritu Santo (UEES)'
          ],
          especialidades: [
            'Mediador, Universidad Hemisferios / CEMEPA',
            'Oficial de Cumplimiento, UAFE'
          ]
        },
        docencia: ['Profesor invitado, carrera de Derecho, Universidad Técnica Particular de Loja (UTPL)']
      }
    },
    paulromo: {
      name: 'Paúl Romo Terán', roleKey: 'abogado',
      email: 'paul.romo@vignolobarzallo.com',
      credential: 'Candidato a Máster en Asesoría Jurídica de Empresas, UNIR',
      areas: 'Derecho Societario y Propiedad Intelectual', photo: 'team-paulromo.webp',
      bio: 'Abogado por la Universidad del Azuay, con Diplomado en Gestión de Patrimonio por la Escuela de Posgrado de Salamanca. Actualmente es candidato a Máster en Asesoría Jurídica de Empresas por la Universidad Internacional de la Rioja. Su práctica se enfoca en derecho societario —constitución, reorganización y disolución de compañías— y en propiedad intelectual, particularmente en el registro de marcas y protección de activos intangibles. Cuenta con nivel de inglés B2/C1 certificado por Cambridge (FCE).',
      resume: {
        educacion: {
          universitaria: ['Abogado, Universidad del Azuay'],
          postgrados: ['Candidato a Máster en Asesoría Jurídica de Empresas, Universidad Internacional de la Rioja (UNIR)', 'Diplomado en Gestión de Patrimonio, Escuela de Posgrado de Salamanca (2025)']
        }
      }
    },
    pedrovillavicencio: {
      name: 'Pedro Francisco Villavicencio Arévalo', roleKey: 'abogado',
      email: 'pvillavicencio@vignolobarzallo.com',
      credential: 'Candidato a Máster en Derecho Procesal, Universidad Andina Simón Bolívar',
      areas: 'Derecho Civil y Procesal', photo: 'team-pedrovillavicencio.webp',
      bio: 'Abogado por la Universidad Politécnica Salesiana, sede Cuenca, y candidato a Máster en Derecho Procesal por la Universidad Andina Simón Bolívar. Su práctica se centra en el Derecho Civil y Procesal, con un enfoque cercano y resolutivo: escucha con atención cada caso, traduce la complejidad legal en decisiones claras y acompaña a sus clientes con firmeza en procesos judiciales y negociaciones extrajudiciales hasta obtener resultados concretos. Mantiene una actualización constante a través de seminarios especializados y cuenta con inglés a nivel alto.',
      resume: {
        educacion: {
          universitaria: ['Abogado, Universidad Politécnica Salesiana, sede Cuenca'],
          postgrados: ['Candidato a Máster en Derecho Procesal, Universidad Andina Simón Bolívar'],
          especialidades: ['Seminario "Desafíos del Derecho Penal ante la Violencia Criminal en Ecuador" (2025)', 'Curso "Técnicas de Manejo de Audiencias de Mediación" (2025)']
        }
      }
    },
    pedrozamora: {
      name: 'Pedro Jose Zamora Barzallo', roleKey: 'abogado',
      email: 'pzamora@vignolobarzallo.com',
      credential: 'Abogado, Universidad de Especialidades Espíritu Santo',
      areas: 'Derecho Civil, Laboral, Administrativo y Corporativo', photo: 'team-pedrozamora.webp',
      bio: 'Abogado por la Universidad de Especialidades Espíritu Santo (UEES), con inglés y francés a nivel intermedio. Su práctica abarca el patrocinio y defensa en procesos civiles, laborales, administrativos y corporativos, con experiencia en litigación bajo el marco del COGEP, asesoría preventiva a empresas, constitución y reestructuración de compañías, y gestión de gobierno corporativo. Se incorporó al Estudio Jurídico Vignolo Barzallo en 2020 como asistente legal y, desde julio de 2025, ejerce como abogado.',
      resume: {
        educacion: { universitaria: ['Abogado, Universidad de Especialidades Espíritu Santo (UEES)'] }
      }
    }
  };

  // Administrative/support staff (not lawyers) — name + role only, no photos.
  // Fill this in with real names/roles when available; the section stays hidden while empty.
  const adminTeam = [
    { name: 'Marjorie Barzallo Seade', role: 'Asistente Administrativa' },
  ];

  const translations = {
    es: {
      nav: { inicio: 'Inicio', nosotros: 'Nosotros', areas: 'Áreas de Práctica', equipo: 'Equipo', contacto: 'Contacto' },
      home: {
        firmEyebrow: 'Nuestra Firma', firmTitle: 'Un estudio con más de tres décadas de trayectoria',
        firmText: 'Ofrecemos servicio legal integral desde 1992, con un equipo de profesionales comprometidos con la confianza, los principios y la eficiencia.', firmCta: 'Ver más',
        teamEyebrow: 'Nuestro Equipo', teamTitle: 'Profesionales a su servicio',
        teamText: 'Un equipo multidisciplinario de abogados, comprometido con la excelencia jurídica y la confianza de nuestros clientes.', teamCta: 'Ver más',
        areasEyebrow: 'Áreas de Práctica', areasTitle: 'Un enfoque integral para cada necesidad legal',
        areasText: 'Cubrimos las principales ramas del Derecho con un servicio preventivo y de defensa, cercano y responsable.', areasCta: 'Ver más',
        ctaTitle: '¿Listo para contactarnos?',
        since: 'Desde 1992'
      },
      nosotros: {
        eyebrow: 'Nosotros',
        intro: 'Comprendemos a la perfección las dinámicas actuales del país y las expectativas de quienes enfrentan decisiones críticas. Nuestro Estudio Jurídico ofrece servicio legal integral desde 1992, con un equipo de profesionales y asistentes jurídicos dedicados a la Asesoría Jurídica de empresas y particulares. Con un enfoque multidisciplinario, ofrecemos estrategias personalizadas que se adaptan a las necesidades específicas de cada cliente, brindando soluciones efectivas y precisas. Valoramos la transparencia al proporcionar una evaluación realista de cada caso, asegurando asesoramiento y consultoría legal, judicial y extrajudicial en las distintas ramas del Derecho.',
        visionLabel: 'Visión',
        vision: 'Equipo jurídico especializado en estrategias; referente de confianza por sus resultados, basados en principios, valores y virtudes, mediante un trabajo sólido y honesto.',
        missionLabel: 'Misión',
        mission: 'Creamos estrategias jurídicas personalizadas, priorizando siempre los intereses de nuestros clientes.'
      },
      stats: { items: [{ n: '34+', l: 'Años de experiencia' }, { n: '11', l: 'Miembros del equipo' }, { n: '9', l: 'Áreas de práctica' }] },
      areas: {
        eyebrow: 'Áreas de práctica',
        title: 'Un enfoque integral para cada necesidad legal',
        intro: 'Ofrecemos un servicio jurídico integral y profesional que abarca las principales áreas del Derecho que se mueven en el país, entre las cuales se incluyen:',
        groups: [
          { title: 'Derecho Penal', summary: 'Defensa y asesoría en procesos penales, desde delitos económicos hasta infracciones de tránsito, protegiendo tus derechos en cada etapa del proceso.', items: ['Derecho Penal General y Económico', 'Delitos de Tránsito', 'Violencia Intrafamiliar'], checklist: ['Copia de la denuncia o notificación recibida', 'Fechas y lugares de los hechos', 'Datos de testigos, si los hay'], related: 8 },
          { title: 'Derecho Civil', summary: 'Acompañamiento en contratos, herencias y responsabilidad civil, resolviendo conflictos patrimoniales entre particulares con seguridad jurídica.', items: ['Contratos Civiles', 'Sucesiones y Derecho Patrimonial', 'Obligaciones y Responsabilidad Civil'], checklist: ['Copia del contrato o documento relacionado', 'Documentos del patrimonio o la sucesión, si aplica', 'Comunicaciones previas con la otra parte'], related: 6 },
          { title: 'Derecho Empresarial y Societario', summary: 'Constitución, estructuración y auditoría legal de compañías, para que tu negocio opere sobre una base jurídica sólida.', items: ['Constitución de Compañías', 'Financiero y Bancario', 'Auditorías Legales y Financieras'], checklist: ['Cédula o pasaporte de los socios', 'Estatuto o minuta de constitución, si ya existe', 'RUC de la empresa, si aplica'], related: 3 },
          { title: 'Derecho Laboral', summary: 'Asesoría en contratación, terminaciones y seguridad social, cuidando el cumplimiento normativo en la relación empleador-trabajador.', items: ['Contratación y Terminaciones', 'Seguridad Social', 'Reglamentos Internos de Trabajo'], checklist: ['Contrato de trabajo', 'Roles de pago recientes', 'Comunicaciones sobre la terminación o el conflicto'], related: 2 },
          { title: 'Derecho Tributario y Aduanero', summary: 'Planificación fiscal y defensa ante la administración tributaria, además de asuntos de comercio exterior y aduanas.', items: ['Planificación Fiscal', 'Comercio Exterior y Aduanas', 'Defensa ante la Administración Tributaria'], checklist: ['Declaraciones tributarias relevantes', 'Notificaciones del SRI o de aduana', 'Estados financieros recientes'], related: 2 },
          { title: 'Derecho Administrativo y Constitucional', summary: 'Representación en contratación pública, acciones constitucionales y procedimientos frente al Estado.', items: ['Contratación Pública', 'Acciones y Garantías Constitucionales', 'Procedimientos Administrativos'], checklist: ['Copia del acto administrativo u oficio recibido', 'Fecha de notificación', 'Documentos del proceso, si aplica'], related: 6 },
          { title: 'Litigios y Resolución de Conflictos', summary: 'Representación en litigios civiles y comerciales, con alternativas de mediación y defensa al consumidor.', items: ['Litigios Civiles y Comerciales', 'Mediaciones', 'Defensa al Consumidor'], checklist: ['Documentación del conflicto (contrato, factura, comunicación)', 'Nombre completo de la contraparte', 'Cronología de los hechos'], related: 1 },
          { title: 'Migración, Seguros y Propiedad Intelectual', summary: 'Trámites migratorios, pólizas de seguros y protección de marcas y propiedad intelectual.', items: ['Migración', 'Seguros', 'Propiedad Intelectual'], checklist: ['Pasaporte y estatus migratorio actual', 'Póliza de seguro, si aplica', 'Certificado o registro de marca u obra, si aplica'], related: 2 },
          { title: 'Derecho de Familia', summary: 'Divorcios, régimen de alimentos, adopciones y convenios familiares, con un enfoque humano y confidencial.', items: ['Divorcio y Régimen de Alimentos', 'Adopciones y Patria Potestad', 'Uniones de Hecho y Convenios Familiares'], checklist: ['Partida de matrimonio o unión de hecho', 'Partidas de nacimiento de los hijos, si los hay', 'Acuerdos previos sobre alimentos o tenencia'], related: 1 }
        ]
      },
      team: { eyebrow: 'Equipo', title: 'Nuestro equipo', intro: 'Somos en total 11 abogados comprometidos con la excelencia y la confianza de nuestros clientes.', founders: 'Socios Fundadores', partners: 'Socios', lawyers: 'Abogados', roles: { abogado: 'Abogado', doctor: 'Doctor', doctora: 'Doctora', socio: 'Socio', socia: 'Socia' }, back: 'Volver al equipo', areasLabel: 'Áreas de práctica', bioIntro: 'forma parte del equipo de', trajectoryLabel: 'Trayectoria Profesional', present: 'Actualidad', newPartner: 'Nuevo Socio', newLawyer: 'Nuevo Abogado', spotAvailable: 'Espacio disponible', adminLabel: 'Equipo Administrativo', cvDownload: 'Descargar CV', backToProfile: 'Volver al perfil',
        resume: { education: 'Educación', university: 'Universitaria', postgrad: 'Postgrados', specialties: 'Especialidades', publications: 'Publicaciones', teaching: 'Docencia', awards: 'Galardones', memberships: 'Membresías', profile: 'Perfil' } },
      motivation: { eyebrow: 'Nuestra motivación', text: 'Motivados por el constante estudio y preocupación de la normativa legal vigente, consideramos que en el Ecuador se deben respetar los derechos y que su vulneración es una transgresión que no debe ser permitida bajo ninguna justificación. Nuestra meta es tu bienestar.' },
      contact: { eyebrow: 'Contacto', title: '¿Listo para contactarnos?', address: 'Av. Florencia Astudillo y Alfonso Cordero, Edificio Cámara de Industrias, Piso 11, oficinas 1101-1102, Cuenca, Ecuador', formName: 'Nombre', formPhone: 'Teléfono', formEmail: 'Correo electrónico', formMessage: 'Mensaje', formSubmit: 'Contáctanos', note: 'Se abrirá tu cliente de correo.' },
      footer: { rights: 'Todos los derechos reservados.' },
      quiz: {
        trigger: '¿Qué área legal necesitas?',
        eyebrow: 'Localiza tu área legal',
        resultSub: 'Según tus respuestas, esta es el área legal que mejor se ajusta a tu caso:',
        viewArea: 'Ver el área completa',
        whatsapp: 'Consultar por WhatsApp',
        contact: 'Enviar una consulta',
        restart: '← Volver a empezar',
        close: 'Cerrar',
        callout: '¿No sabes qué área legal necesitas? Ubícala aquí →',
        checklistLabel: 'Qué tener a mano para tu consulta',
        relatedLabel: 'También te puede interesar:',
        confidentialNote: 'Tu consulta es confidencial.',
        q1: {
          question: '¿Qué te trae por aquí?',
          options: [
            { label: 'Un asunto personal o familiar', next: 'q2a' },
            { label: 'Un tema de mi empresa o negocio', next: 'q2b' },
            { label: 'Estoy enfrentando un conflicto o proceso legal', next: 'q2c' },
            { label: 'Necesito resolver algo con el Estado', next: 'q2d' }
          ]
        },
        q2a: { question: '¿Qué situación se acerca más a la tuya?', options: [
          { label: 'Separación, alimentos o tenencia de mis hijos', area: 8 },
          { label: 'Ordenar una herencia o sucesión', area: 1 },
          { label: 'Tengo un trámite migratorio pendiente', area: 7 }
        ]},
        q2b: { question: '¿Qué necesita tu negocio en este momento?', options: [
          { label: 'Constituir la empresa o poner en orden su estructura legal', area: 2 },
          { label: 'Un tema laboral con uno o varios empleados', area: 3 },
          { label: 'Impuestos, aranceles o comercio exterior', area: 4 },
          { label: 'Asegurar un bien o proteger una marca de la empresa', area: 7 }
        ]},
        q2c: { question: '¿De qué tipo es el conflicto?', options: [
          { label: 'Me investigan o acusan penalmente', area: 0 },
          { label: 'Tuve un accidente de tránsito', area: 0 },
          { label: 'Tengo un litigio civil o comercial', area: 6 },
          { label: 'Necesito proteger una marca o una obra', area: 7 }
        ]},
        q2d: { question: '¿Qué tipo de trámite es?', options: [
          { label: 'Contratación pública o un proceso administrativo', area: 5 },
          { label: 'Un trámite migratorio', area: 7 },
          { label: 'Impuestos o aduanas', area: 4 }
        ]}
      },
      cookies: {
        text: 'Usamos únicamente cookies esenciales para el funcionamiento del sitio. No utilizamos cookies de rastreo publicitario.',
        accept: 'Entendido',
        decline: 'Rechazar'
      }
    },
    en: {
      nav: { inicio: 'Home', nosotros: 'About Us', areas: 'Practice Areas', equipo: 'Team', contacto: 'Contact' },
      home: {
        firmEyebrow: 'Our Firm', firmTitle: 'A firm with more than three decades of history',
        firmText: 'We have offered comprehensive legal service since 1992, with a team of professionals committed to trust, principles and efficiency.', firmCta: 'Learn more',
        teamEyebrow: 'Our Team', teamTitle: 'Professionals at your service',
        teamText: 'A multidisciplinary team of attorneys, committed to legal excellence and our clients’ trust.', teamCta: 'Learn more',
        areasEyebrow: 'Practice Areas', areasTitle: 'A comprehensive approach for every legal need',
        areasText: 'We cover the main branches of Law with preventive and defense counsel, close and responsible.', areasCta: 'Learn more',
        ctaTitle: 'Ready to get in touch?',
        since: 'Since 1992'
      },
      nosotros: {
        eyebrow: 'About Us',
        intro: 'We fully understand the country’s current dynamics and the expectations of those facing critical decisions. Our Law Firm has offered comprehensive legal services since 1992, with a team of professionals and legal assistants dedicated to serving both companies and individuals. With a multidisciplinary approach, we offer tailored strategies that adapt to each client’s specific needs, delivering effective and precise solutions. We value transparency, providing a realistic assessment of every case and legal, judicial and extrajudicial advice across the different branches of Law.',
        visionLabel: 'Vision',
        vision: 'A legal team specialized in strategy; a trusted reference for our results, grounded in principles, values and virtues, through solid and honest work.',
        missionLabel: 'Mission',
        mission: 'We build tailored legal strategies that always put our clients’ interests first.'
      },
      stats: { items: [{ n: '34+', l: 'Years of experience' }, { n: '11', l: 'Team members' }, { n: '9', l: 'Practice areas' }] },
      areas: {
        eyebrow: 'Practice areas',
        title: 'A comprehensive approach for every legal need',
        intro: 'We offer a comprehensive, professional legal service covering the main branches of Law active in the country, including:',
        groups: [
          { title: 'Criminal Law', summary: 'Defense and counsel in criminal proceedings, from economic crimes to traffic offenses, protecting your rights at every stage.', items: ['General & Economic Criminal Law', 'Traffic Offenses', 'Domestic Violence'], checklist: ['A copy of the complaint or notice received', 'Dates and locations of the events', 'Witness details, if any'], related: 8 },
          { title: 'Civil Law', summary: 'Support with contracts, inheritance and civil liability, resolving property disputes between individuals with legal certainty.', items: ['Civil Contracts', 'Inheritance & Estate Law', 'Obligations & Civil Liability'], checklist: ['A copy of the contract or related document', 'Estate or inheritance documents, if applicable', 'Prior communications with the other party'], related: 6 },
          { title: 'Corporate Law', summary: 'Company formation, structuring and legal audits, so your business operates on solid legal footing.', items: ['Company Formation', 'Banking & Finance', 'Legal & Financial Audits'], checklist: ['ID or passport of the partners', 'Bylaws or incorporation draft, if it already exists', 'Company tax ID, if applicable'], related: 3 },
          { title: 'Labor Law', summary: 'Guidance on hiring, terminations and social security, ensuring compliance in the employer-employee relationship.', items: ['Hiring & Termination', 'Social Security', 'Internal Work Regulations'], checklist: ['Employment contract', 'Recent payroll records', 'Communications about the termination or dispute'], related: 2 },
          { title: 'Tax & Customs Law', summary: 'Tax planning and defense before the tax authority, plus foreign trade and customs matters.', items: ['Tax Planning', 'Foreign Trade & Customs', 'Tax Authority Defense'], checklist: ['Relevant tax filings', 'Notices from the tax or customs authority', 'Recent financial statements'], related: 2 },
          { title: 'Administrative & Constitutional Law', summary: 'Representation in public procurement, constitutional actions and proceedings before the State.', items: ['Public Procurement', 'Constitutional Actions & Guarantees', 'Administrative Procedures'], checklist: ['A copy of the administrative act or notice received', 'Notification date', 'Process documents, if applicable'], related: 6 },
          { title: 'Litigation & Dispute Resolution', summary: 'Representation in civil and commercial litigation, with mediation alternatives and consumer protection.', items: ['Civil & Commercial Litigation', 'Mediation', 'Consumer Protection'], checklist: ['Documentation of the dispute (contract, invoice, communication)', 'Full name of the other party', 'Timeline of events'], related: 1 },
          { title: 'Immigration, Insurance & IP', summary: 'Immigration procedures, insurance policies, and protection of trademarks and intellectual property.', items: ['Immigration', 'Insurance', 'Intellectual Property'], checklist: ['Passport and current immigration status', 'Insurance policy, if applicable', 'Trademark or work registration certificate, if applicable'], related: 2 },
          { title: 'Family Law', summary: 'Divorce, alimony, adoption and family agreements, handled with a human, confidential approach.', items: ['Divorce & Alimony', 'Adoption & Parental Rights', 'Common-Law Unions & Family Agreements'], checklist: ['Marriage or civil union certificate', "Children's birth certificates, if any", 'Any prior agreements on alimony or custody'], related: 1 }
        ]
      },
      team: { eyebrow: 'Team', title: 'Our team', intro: 'A team committed to excellence and to our clients’ trust.', founders: 'Founding Partners', partners: 'Partners', lawyers: 'Attorneys', roles: { abogado: 'Attorney', doctor: 'Doctor of Law', doctora: 'Doctor of Law', socio: 'Partner', socia: 'Partner' }, back: 'Back to team', areasLabel: 'Practice areas', bioIntro: 'is part of the team at', trajectoryLabel: 'Professional Background', present: 'Present', newPartner: 'New Partner', newLawyer: 'New Attorney', spotAvailable: 'Spot available', adminLabel: 'Administrative Team', cvDownload: 'Download CV', backToProfile: 'Back to profile',
        resume: { education: 'Education', university: 'University', postgrad: 'Postgraduate', specialties: 'Specialties', publications: 'Publications', teaching: 'Teaching', awards: 'Awards', memberships: 'Memberships', profile: 'Profile' } },
      motivation: { eyebrow: 'Our motivation', text: 'Driven by constant study of current legislation, we believe that rights must be respected in Ecuador, and that violating them is a transgression that cannot be justified under any circumstance. Our goal is your wellbeing.' },
      contact: { eyebrow: 'Contact', title: 'Ready to get in touch?', address: 'Av. Florencia Astudillo y Alfonso Cordero, Edificio Cámara de Industrias, Piso 11, offices 1101-1102, Cuenca, Ecuador', formName: 'Name', formPhone: 'Phone', formEmail: 'Email', formMessage: 'Message', formSubmit: 'Contact Us', note: 'This will open your email client.' },
      footer: { rights: 'All rights reserved.' },
      quiz: {
        trigger: 'Which legal area do you need?',
        eyebrow: 'Find your legal area',
        resultSub: 'Based on your answers, this is the legal area that best fits your case:',
        viewArea: 'View full practice area',
        whatsapp: 'Ask on WhatsApp',
        contact: 'Send an inquiry',
        restart: '← Start over',
        close: 'Close',
        callout: 'Not sure which legal area you need? Find out here →',
        checklistLabel: 'What to have ready for your consultation',
        relatedLabel: 'You might also be interested in:',
        confidentialNote: 'Your inquiry is confidential.',
        q1: {
          question: 'What brings you here today?',
          options: [
            { label: 'A personal or family matter', next: 'q2a' },
            { label: 'Something related to my company or business', next: 'q2b' },
            { label: 'I am facing a legal conflict or proceeding', next: 'q2c' },
            { label: 'I need to resolve something with the government', next: 'q2d' }
          ]
        },
        q2a: { question: 'Which situation is closest to yours?', options: [
          { label: 'Separation, alimony or child custody', area: 8 },
          { label: 'Settling an inheritance or estate', area: 1 },
          { label: 'I have a pending immigration matter', area: 7 }
        ]},
        q2b: { question: 'What does your business need right now?', options: [
          { label: 'Setting up the company or sorting out its legal structure', area: 2 },
          { label: 'A labor matter with one or more employees', area: 3 },
          { label: 'Taxes, tariffs or foreign trade', area: 4 },
          { label: 'Insuring an asset or protecting a company trademark', area: 7 }
        ]},
        q2c: { question: 'What type of conflict is it?', options: [
          { label: 'I am under criminal investigation or charges', area: 0 },
          { label: 'I had a traffic accident', area: 0 },
          { label: 'I have a civil or commercial dispute', area: 6 },
          { label: 'I need to protect a trademark or creative work', area: 7 }
        ]},
        q2d: { question: 'What type of procedure is it?', options: [
          { label: 'Public procurement or an administrative process', area: 5 },
          { label: 'An immigration procedure', area: 7 },
          { label: 'Taxes or customs', area: 4 }
        ]}
      },
      cookies: {
        text: 'We only use essential cookies for the site to function. We do not use advertising tracking cookies.',
        accept: 'Got it',
        decline: 'Decline'
      }
    }
  };

  // Practice-area icons (path data only, rendered as inline SVG)
  const areaIcons = [
    ['M12 3v18', 'M5 7l-3 6a3 3 0 0 0 6 0l-3-6Z', 'M19 7l-3 6a3 3 0 0 0 6 0l-3-6Z', 'M5 7h14', 'M9 21h6'],
    ['M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M2 20c0-3 2.5-5 6-5s6 2 6 5', 'M10 20c0-3 2.5-5 6-5s6 2 6 5'],
    ['M4 21V7l8-4 8 4v14', 'M4 21h16', 'M9 21v-6h6v6', 'M9 11h.01', 'M15 11h.01', 'M9 7h.01', 'M15 7h.01'],
    ['M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z', 'M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1', 'M3 13h18'],
    ['M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z', 'M14 2v6h6', 'M8 13h8', 'M8 17h5'],
    ['M3 21h18', 'M4 21V9l8-5 8 5v12', 'M9 21V13h6v8', 'M4 9h16'],
    ['M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M16 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M2 20c0-2.8 2.5-5 6-5', 'M22 20c0-2.8-2.5-5-6-5', 'M9 20c0-2.8 1.3-5 3-5s3 2.2 3 5'],
    ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3 12h18', 'M12 3a14 14 0 0 1 0 18', 'M12 3a14 14 0 0 0 0 18'],
    ['M12 20s-6-3.9-8-7.8C2.7 9 4 6 7 6c1.8 0 3.3 1 4 2.4C11.7 7 13.2 6 15 6c3 0 4.3 3 3 6.2-2 3.9-8 7.8-8 7.8Z']
  ];

  // Practice-area photos already sourced (credited Unsplash stock); other groups use a placeholder.
  // Fotos por área de práctica. El índice corresponde al orden de
  // translations.<idioma>.areas.groups. Las que llevan `credit` son de
  // stock (Unsplash) y muestran la atribución sobre la imagen; las
  // propias del estudio no la llevan.
  const areaPhotos = {
    0: { src: 'https://images.unsplash.com/photo-1767972159871-b9f5d320be2b?fm=jpg&q=80&w=1200&auto=format&fit=crop', credit: 'Sasun Bughdaryan', href: 'https://unsplash.com/@sasun1990' },
    1: { src: 'img/area-civil.webp' },
    2: { src: 'img/area-empresarial.webp' },
    3: { src: 'img/area-laboral.webp' },
    4: { src: 'img/area-tributario.webp' },
    5: { src: 'img/area-administrativo.webp' },
    6: { src: 'https://images.unsplash.com/photo-1764113697577-b5899b9a339d?fm=jpg&q=80&w=1200&auto=format&fit=crop', credit: 'Albert Stoynov', href: 'https://unsplash.com/@albertstoynov' },
    7: { src: 'img/area-migracion.webp' },
    8: { src: 'img/area-familia.webp' }
  };

  const UNSPLASH_UTM = '?utm_source=vignolobarzallo&utm_medium=referral';

  // ============================================================
  // Motion timings (ms) — named so every animated delay traces back
  // to an intentional duration rather than a stray magic number.
  // Mirrors the CSS motion tokens in :root for the same philosophy:
  // fast feedback, slow/cinematic entrances and hero imagery.
  // ============================================================
  const MOTION = {
    pageFade: 220,          // page-content fade-out before swapping content (~CSS --duration-md)
    heroZoom: 13000,        // Ken Burns zoom duration per hero slide
    heroInterval: 12000,    // how long each hero slide stays before advancing
    quizCloseFade: 250,     // quiz modal fade-out before it's removed from the DOM
    highlightFlash: 1900,   // area-row highlight duration after "ver más"
    calloutDelay: 3500,     // delay before the quiz callout bubble appears
    calloutAutoHide: 15000, // auto-hide the callout if the visitor never interacts
    cookieHide: 350         // cookie banner fade-out before hiding
  };

  // ============================================================
  // State
  // ============================================================

  const validPages = ['inicio', 'nosotros', 'areas', 'equipo', 'contacto'];
  const state = {
    lang: 'es',
    page: 'inicio',
    selectedMember: null,
    cvView: null,
    heroSlide: 0,
    formName: '',
    formEmail: '',
    formMessage: '',
    quizStep: 'q1',
    quizArea: null,
    quizPath: []
  };

  let heroTimer = null;

  // ============================================================
  // Helpers
  // ============================================================

  function esc(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function t() { return translations[state.lang]; }

  function iconSvg(paths) {
    return '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#AFB800" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
      paths.map(d => `<path d="${d}"></path>`).join('') + '</svg>';
  }

  function photoIcon() {
    return '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" class="ph-icon"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';
  }

  function navigate(page) {
    if (page === state.page && !state.selectedMember && !state.cvView) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    transitionTo(() => {
      state.page = page;
      state.selectedMember = null;
      state.cvView = null;
      window.location.hash = page;
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  function transitionTo(mutate, afterRender) {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { mutate(); render(); if (afterRender) afterRender(); return; }
    pageContentEl.classList.add('page-fade-out');
    setTimeout(() => {
      mutate();
      render();
      if (afterRender) afterRender();
      requestAnimationFrame(() => pageContentEl.classList.remove('page-fade-out'));
    }, MOTION.pageFade);
  }

  // ============================================================
  // Page renderers
  // ============================================================

  function renderHomePage() {
    const T = t();
    // La segunda imagen es el Edificio Cámara de Industrias, sede del estudio.
    // Ya viene en blanco y negro, por eso no lleva el filtro `grayscale`.
    const heroImgs = ['img/portada.webp', 'img/inicio-edificio.webp', 'img/contacto.webp'];
    const heroGray = [false, false, true];
    const slides = heroImgs.map((src, i) => `
      <div class="hero-slide ${i === state.heroSlide ? 'active' : ''} ${heroGray[i] ? 'grayscale' : ''}">
        <img src="${src}" alt="">
      </div>`).join('');
    const dots = heroImgs.map((_, i) => `<button class="hero-dot ${i === state.heroSlide ? 'active' : ''}" data-hero-dot="${i}" aria-label="Slide ${i + 1}"></button>`).join('');

    const areaCards = T.areas.groups.map((g, i) => `
      <div class="areas-preview-card reveal" style="transition-delay:${i * 60}ms" data-goto-area="${i}">
        ${iconSvg(areaIcons[i])}
        <span>${esc(g.title)}</span>
        <span class="areas-preview-hover">${esc(T.home.areasCta)} →</span>
      </div>`).join('');

    const statCards = T.stats.items.map(it => {
      const match = String(it.n).match(/^(\d+)(.*)$/);
      const num = match ? match[1] : it.n;
      const suffix = match ? match[2] : '';
      return `<div><div class="stat-num" data-count="${num}" data-suffix="${esc(suffix)}">0${esc(suffix)}</div><div class="stat-label">${esc(it.l)}</div></div>`;
    }).join('');

    return `
      <section class="hero">${slides}<div class="hero-dots">${dots}</div></section>

      <section class="page-section">
        <div class="split-row reveal">
          <div class="split-text">
            <div class="eyebrow">${esc(T.home.firmEyebrow)}</div>
            <h2 class="section-title" style="font-size:38px;line-height:1.3">${esc(T.home.firmTitle)}</h2>
            <p class="body-text" style="margin-bottom:24px">${esc(T.home.firmText)}</p>
            <span class="cta-link" data-goto="nosotros">${esc(T.home.firmCta)} →</span>
          </div>
          <div class="split-img corner-frame">
            <div class="photo-box"><img src="img/equipo-grupo.webp" alt="" loading="lazy"></div>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="stats-row reveal">
          <span class="stats-since">${esc(T.home.since)}</span>
          <div class="stats-flex">${statCards}</div>
        </div>
      </section>

      <section class="page-section">
        <div class="split-row reverse reveal">
          <div class="split-img corner-frame">
            <div class="photo-box"><img src="img/nosotros.webp" alt="Equipo de Vignolo Barzallo Estudio Jurídico" loading="lazy"></div>
          </div>
          <div class="split-text">
            <div class="eyebrow">${esc(T.home.teamEyebrow)}</div>
            <h2 class="section-title" style="font-size:38px;line-height:1.3">${esc(T.home.teamTitle)}</h2>
            <p class="body-text" style="margin-bottom:24px">${esc(T.home.teamText)}</p>
            <span class="cta-link" data-goto="equipo">${esc(T.home.teamCta)} →</span>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="reveal" style="border-top:1px solid rgba(175,184,0,.3);padding-top:64px;text-align:center;margin-bottom:48px">
          <div class="eyebrow">${esc(T.home.areasEyebrow)}</div>
          <h2 class="section-title" style="font-size:38px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.3">${esc(T.home.areasTitle)}</h2>
          <p class="body-text" style="max-width:600px;margin:0 auto;font-size:15px">${esc(T.home.areasText)}</p>
        </div>
        <div class="areas-preview-grid">${areaCards}</div>
        <div style="text-align:center;margin-top:44px"><button type="button" class="pill-btn" data-goto="areas">${esc(T.home.areasCta)}</button></div>
      </section>

      <section class="home-cta">
        <div class="container">
          <div class="contact-info-col on-dark">
            <h2>${esc(T.home.ctaTitle)}</h2>
            <div class="divider"></div>
            ${contactInfoRows(T, true)}
          </div>
          <div class="contact-form-col">${contactForm(T, true)}</div>
        </div>
      </section>
    `;
  }

  function contactInfoRows(T, onDark) {
    return `
      <div class="info-row">
        <a href="https://www.google.com/maps/search/?api=1&query=Av.+Florencia+Astudillo+y+Alfonso+Cordero+Cuenca+Ecuador" target="_blank" rel="noopener" style="display:flex;gap:14px;align-items:flex-start">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFB800" stroke-width="1.8" style="flex-shrink:0;margin-top:2px"><path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
          <span>${esc(T.contact.address)}</span>
        </a>
      </div>
      <div class="info-row">
        <a href="mailto:info@vignolobarzallo.com" style="display:flex;gap:14px;align-items:center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFB800" stroke-width="1.8" style="flex-shrink:0"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
          <span>info@vignolobarzallo.com</span>
        </a>
      </div>
      <div class="info-row">
        <a href="https://wa.me/593998443338" target="_blank" rel="noopener" style="display:flex;gap:14px;align-items:center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AFB800" stroke-width="1.8" style="flex-shrink:0"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.6 2Z"></path></svg>
          <span>+593 99 844 3338 (WhatsApp)</span>
        </a>
      </div>
      <div class="social-row">
        <a class="social-circle ${onDark ? 'on-navy' : 'dark-bg'}" href="https://instagram.com/vignolobarzallo" target="_blank" rel="noopener" title="Instagram">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none"></circle></svg>
        </a>
        <a class="social-circle ${onDark ? 'on-navy' : 'dark-bg'}" href="https://wa.me/593998443338" target="_blank" rel="noopener" title="WhatsApp">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.1.11-1.78-.11-.41-.13-.93-.3-1.6-.6-2.82-1.22-4.65-4.06-4.79-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.3.38-.43.51-.14.14-.29.29-.13.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z"></path></svg>
        </a>
        <a class="social-circle ${onDark ? 'on-navy' : 'dark-bg'}" href="https://www.linkedin.com/company/vignolo-barzallo-abogados/about/" target="_blank" rel="noopener" title="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zm7.5 0h4.31v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.65V23h-4.5V8.25z"></path></svg>
        </a>
      </div>
    `;
  }

  function contactForm(T, onDark) {
    return `
      <form class="contact-form ${onDark ? 'on-dark' : ''}" data-contact-form>
        <div class="form-row">
          <input type="text" name="name" placeholder="${esc(T.contact.formName)}" value="${esc(state.formName)}" data-field="formName">
          <input type="tel" name="phone" placeholder="${esc(T.contact.formPhone)}">
        </div>
        <input type="email" name="email" placeholder="${esc(T.contact.formEmail)}" value="${esc(state.formEmail)}" data-field="formEmail">
        <textarea name="message" placeholder="${esc(T.contact.formMessage)}" rows="4" data-field="formMessage">${esc(state.formMessage)}</textarea>
        <button type="submit" class="submit-btn">${esc(T.contact.formSubmit)}</button>
        <div class="form-note">${esc(T.contact.note)}</div>
      </form>
    `;
  }

  function renderNosotrosPage() {
    const T = t();
    return `
      <div class="about-banner">
        <img src="img/inicio-edificio.webp" alt="">
        <div class="scrim"></div>
        <h1>${esc(T.nosotros.eyebrow)}</h1>
      </div>

      <div class="about-intro reveal">
        <p class="body-text drop-cap" style="font-size:17px;line-height:1.9">${esc(T.nosotros.intro)}</p>
      </div>

      <div class="about-body">
        <div class="about-vm reveal">
          <div class="split-img corner-frame" style="aspect-ratio:3/4;flex:0 1 280px;min-width:220px">
            <div class="photo-box"><img src="img/nosotros-logo-oficina.webp" alt="Vignolo Barzallo Estudio Jurídico" loading="lazy"></div>
          </div>
          <div class="vm-col">
            <div><div class="label">${esc(T.nosotros.visionLabel)}</div><p>${esc(T.nosotros.vision)}</p></div>
            <div><div class="label">${esc(T.nosotros.missionLabel)}</div><p>${esc(T.nosotros.mission)}</p></div>
          </div>
        </div>

        <div class="about-motivation reveal">
          <div class="split-img corner-frame">
            <div class="photo-box"><img src="img/nosotros.webp" alt="" loading="lazy"></div>
          </div>
          <div class="split-text">
            <div class="eyebrow" style="letter-spacing:.24em">${esc(translations[state.lang].motivation.eyebrow)}</div>
            <p class="pull-quote">${esc(translations[state.lang].motivation.text)}</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderAreasPage() {
    const T = t();
    const rows = T.areas.groups.map((g, i) => {
      const photo = areaPhotos[i];
      const parity = i % 2 === 0 ? 'even' : 'odd';
      return `
        <div class="area-row ${parity} reveal" id="area-row-${i}">
          <div class="area-text">
            <div class="inner">
              <h2>${esc(g.title)}</h2>
              <div class="rule"></div>
              ${g.summary ? `<p class="area-summary">${esc(g.summary)}</p>` : ''}
              <ul>${g.items.map(it => `<li>${esc(it)}</li>`).join('')}</ul>
            </div>
          </div>
          <div class="area-img">
            <div class="corner-frame" style="position:absolute;inset:20px">
              <div class="photo-box ${photo ? '' : 'placeholder'}" style="position:absolute;inset:0">
                ${photo
                  ? `<img src="${photo.src}" alt="${esc(g.title)}" loading="lazy">${photo.credit
                      ? `<span class="credit">Foto: <a href="${photo.href}${UNSPLASH_UTM}" target="_blank" rel="noopener">${esc(photo.credit)}</a></span>`
                      : ''}`
                  : photoIcon()}
              </div>
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="areas-header">
        <div class="eyebrow">${esc(T.areas.eyebrow)}</div>
        <h1 class="section-title">${esc(T.areas.title)}</h1>
        <p class="body-text">${esc(T.areas.intro)}</p>
      </div>
      ${rows}
    `;
  }

  function teamCard(id, member, opts = {}) {
    const T = t();
    const roleLabel = member.roleKey ? T.team.roles[member.roleKey] : '';
    return `
      <div class="team-card reveal ${opts.clickable ? 'clickable' : ''}" style="transition-delay:${opts.delay || 0}ms" ${opts.clickable ? `data-select-member="${id}"` : ''}>
        <div class="photo-box ${member.photo ? '' : 'placeholder'}">${member.photo ? `<img src="img/${member.photo}" alt="${esc(member.name)}" loading="lazy">` : photoIcon()}</div>
        <div class="team-name">${esc(member.name)}</div>
        <div class="team-role">${esc(roleLabel)}</div>
        ${member.credential ? `<div class="team-credential">${esc(member.credential)}</div>` : ''}
      </div>`;
  }

  function emptySeatCard(nameLabel, roleLabel, delay = 0) {
    return `
      <div class="team-card empty-seat reveal" style="transition-delay:${delay}ms">
        <div class="photo-box placeholder"></div>
        <div class="team-name">${esc(nameLabel)}</div>
        <div class="team-role">${esc(roleLabel)}</div>
        <div class="team-credential">${esc(t().team.spotAvailable)}</div>
      </div>`;
  }

  function accordionList(items) {
    return items && items.length ? `<ul class="accordion-list">${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
  }

  function accordionSubgroup(label, items) {
    if (!items || !items.length) return '';
    return `<div class="accordion-subgroup"><div class="accordion-subgroup-title">${esc(label)}</div>${accordionList(items)}</div>`;
  }

  function accordionSection(title, bodyHtml, open) {
    if (!bodyHtml) return '';
    return `
      <div class="accordion-item${open ? ' open' : ''}">
        <button type="button" class="accordion-header" data-accordion-toggle>
          <span>${esc(title)}</span>
          <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
        <div class="accordion-body"><div class="accordion-body-inner"><div class="accordion-content">${bodyHtml}</div></div></div>
      </div>`;
  }

  function resumeAccordion(resume) {
    if (!resume) return '';
    const T = t().team.resume;
    const edu = resume.educacion || {};
    const sections = [
      { title: T.education, body: [
          accordionSubgroup(T.university, edu.universitaria),
          accordionSubgroup(T.postgrad, edu.postgrados),
          accordionSubgroup(T.specialties, edu.especialidades)
        ].join('') },
      { title: T.publications, body: accordionList(resume.publicaciones) },
      { title: T.teaching, body: accordionList(resume.docencia) },
      { title: T.awards, body: accordionList(resume.galardones) },
      { title: T.memberships, body: accordionList(resume.membresias) }
    ].filter(s => s.body);
    if (!sections.length) return '';
    return `<div class="resume-accordion">${sections.map((s, i) => accordionSection(s.title, s.body, i === 0)).join('')}</div>`;
  }

  // Documento de CV: mismo layout para todos los abogados, poblado con
  // los datos de teamMembers[key]. Pensado para verse bien en pantalla
  // y para imprimirse/guardarse como PDF vía window.print() (ver @media
  // print en style.css).
  function renderCVDocument(key) {
    const T = t();
    const m = teamMembers[key];
    if (!m) return '';
    const roleLabel = m.roleKey ? T.team.roles[m.roleKey] : '';
    const R = m.resume || {};
    const edu = R.educacion || {};
    const Tr = T.team.resume;
    const eduBody = [
      accordionSubgroup(Tr.university, edu.universitaria),
      accordionSubgroup(Tr.postgrad, edu.postgrados),
      accordionSubgroup(Tr.specialties, edu.especialidades)
    ].join('');
    const sections = [
      { title: Tr.education, body: eduBody.trim() ? eduBody : '' },
      { title: Tr.publications, body: accordionList(R.publicaciones) },
      { title: Tr.teaching, body: accordionList(R.docencia) },
      { title: Tr.awards, body: accordionList(R.galardones) },
      { title: Tr.memberships, body: accordionList(R.membresias) }
    ].filter(s => s.body);

    return `
      <div class="cv-toolbar no-print">
        <button type="button" class="team-back" data-cv-back>← ${esc(T.team.backToProfile)}</button>
        <button type="button" class="pill-btn" data-cv-print>${esc(T.team.cvDownload)}</button>
      </div>
      <div class="cv-doc">
        <div class="cv-doc-header">
          <img class="cv-doc-logo" src="img/logo.webp" alt="Vignolo Barzallo">
          <div class="cv-doc-id">
            <h1>${esc(m.name)}</h1>
            <div class="cv-doc-role">${esc(roleLabel)}${m.areas ? ' · ' + esc(m.areas) : ''}</div>
          </div>
        </div>
        <div class="cv-doc-contact">${esc(m.email || 'info@vignolobarzallo.com')} &nbsp;·&nbsp; Cuenca, Ecuador &nbsp;·&nbsp; www.vignolobarzallo.com</div>
        ${m.bio ? `<div class="cv-doc-section"><h2>${esc(Tr.profile)}</h2><p>${esc(m.bio)}</p></div>` : ''}
        <div class="cv-doc-section">
          <h2>${esc(T.team.trajectoryLabel)}</h2>
          <ul class="accordion-list"><li>${esc(roleLabel)}, Vignolo Barzallo — ${esc(T.team.present)}</li></ul>
        </div>
        ${sections.map(s => `<div class="cv-doc-section"><h2>${esc(s.title)}</h2>${s.body}</div>`).join('')}
        <div class="cv-doc-footer">Vignolo Barzallo Estudio Jurídico — Av. Florencia Astudillo y Alfonso Cordero, Edificio Cámara de Industrias, Cuenca, Ecuador</div>
      </div>
    `;
  }

  function renderEquipoPage() {
    const T = t();
    if (state.cvView) return renderCVDocument(state.cvView);
    if (state.selectedMember) {
      const m = teamMembers[state.selectedMember];
      const roleLabel = m.roleKey ? T.team.roles[m.roleKey] : '';
      const linkedinHref = 'https://www.linkedin.com/search/results/all/?keywords=' + encodeURIComponent(m.name + ' Vignolo Barzallo');
      return `
        <button class="team-back" data-back-to-team>← ${esc(T.team.back)}</button>
        <div class="team-detail">
          <div class="team-detail-photo">
            <div class="photo-box ${m.photo ? '' : 'placeholder'}">${m.photo ? `<img src="img/${m.photo}" alt="${esc(m.name)}" loading="lazy">` : photoIcon()}</div>
            <div class="team-detail-name">${esc(m.name)}</div>
            <div class="team-detail-role">${esc(roleLabel)}</div>
            <div class="team-detail-social">
              <a class="social-circle dark-bg" href="${linkedinHref}" target="_blank" rel="noopener" title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.25h4.5V23H.24V8.25zm7.5 0h4.31v2.02h.06c.6-1.13 2.07-2.33 4.26-2.33 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.65V23h-4.5V8.25z"></path></svg>
              </a>
              <a class="social-circle dark-bg" href="mailto:${esc(m.email || 'info@vignolobarzallo.com')}" title="Correo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>
              </a>
              <button type="button" class="social-circle dark-bg" data-view-cv="${state.selectedMember}" title="${esc(T.team.cvDownload)}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M9 15h6M9 18h4"></path></svg>
              </button>
            </div>
          </div>
          <div class="team-detail-body">
            ${m.areas ? `<div class="team-detail-areas"><span class="lbl">${esc(T.team.areasLabel)}: </span><span class="val">${esc(m.areas)}</span></div>` : ''}
            <p class="team-detail-bio">${m.bio ? esc(m.bio) : `<b>${esc(m.name)}</b> ${esc(T.team.bioIntro)} <b>Vignolo Barzallo</b>.${m.credential ? ' ' + esc(m.credential) + '.' : ''}`}</p>
            <div class="team-detail-trajectory">
              <div class="t-title">${esc(T.team.trajectoryLabel)}</div>
              <ul><li>${esc(roleLabel)}, Vignolo Barzallo — ${esc(T.team.present)}</li></ul>
            </div>
            ${resumeAccordion(m.resume)}
          </div>
        </div>
      `;
    }

    const founders = ['alex', 'mariabarzallo'];
    const partners = ['giancarlo', 'mariaaugusta', 'eugenio', 'gabriela', 'pedro'];
    const lawyers = ['paulromo', 'pedrovillavicencio', 'pedrozamora'];

    return `
      <div class="team-header">
        <div class="eyebrow">${esc(T.team.eyebrow)}</div>
        <h1 class="section-title">${esc(T.team.title)}</h1>
        <p class="body-text">${esc(T.team.intro)}</p>
      </div>

      <div class="team-group-label"><span>${esc(T.team.founders)}</span><span class="line"></span></div>
      <div class="founders-grid">
        ${founders.map((id, i) => teamCard(id, teamMembers[id], { clickable: true, delay: i * 70 })).join('')}
      </div>

      <div class="team-group-label"><span>${esc(T.team.partners)}</span><span class="line"></span></div>
      <div class="team-grid">
        ${partners.map((id, i) => teamCard(id, teamMembers[id], { clickable: true, delay: i * 70 })).join('')}
      </div>

      <div class="team-group-label"><span>${esc(T.team.lawyers)}</span><span class="line"></span></div>
      <div class="team-grid">
        ${lawyers.map((id, i) => teamCard(id, teamMembers[id], { clickable: true, delay: i * 70 })).join('')}
      </div>

      ${adminTeam.length ? `
      <div class="admin-team reveal">
        <div class="admin-team-label">${esc(T.team.adminLabel)}</div>
        <div class="admin-team-grid">
          ${adminTeam.map(m => `
            <div class="admin-team-member">
              <div class="admin-team-name">${esc(m.name)}</div>
              <div class="admin-team-role">${esc(m.role)}</div>
            </div>`).join('')}
        </div>
      </div>` : ''}
    `;
  }

  function renderContactoPage() {
    const T = t();
    return `
      <div class="container">
        <div class="eyebrow">${esc(T.contact.eyebrow)}</div>
        <h1>${esc(T.contact.title)}</h1>
        <div class="divider"></div>
        <div class="split-row reveal">
          <div class="contact-info-col on-light">${contactInfoRows(T, false)}</div>
          <div class="contact-form-col">${contactForm(T, false)}</div>
        </div>
      </div>
    `;
  }

  const pageRenderers = {
    inicio: renderHomePage,
    nosotros: renderNosotrosPage,
    areas: renderAreasPage,
    equipo: renderEquipoPage,
    contacto: renderContactoPage
  };

  // ============================================================
  // Render + events
  // ============================================================

  const pageContentEl = document.getElementById('page-content');

  function render() {
    const T = t();
    document.documentElement.lang = state.lang;

    // Nav labels + active state
    document.querySelectorAll('.nav-link').forEach(elx => {
      const p = elx.getAttribute('data-nav');
      elx.textContent = T.nav[p];
      elx.classList.toggle('active', p === state.page);
    });
    document.querySelectorAll('.lang-opt').forEach(elx => {
      elx.classList.toggle('active', elx.getAttribute('data-lang') === state.lang);
    });
    document.getElementById('footer-rights-text').textContent = T.footer.rights;
    document.getElementById('year').textContent = new Date().getFullYear();
    updateStaticWidgetsText();

    pageContentEl.className = 'page-' + state.page;
    pageContentEl.innerHTML = (pageRenderers[state.page] || renderHomePage)();

    if (state.page === 'inicio') { startHeroTimer(); triggerActiveKenBurns(); } else stopHeroTimer();

    attachContentEvents();
    initReveal();
    initStatsCounter();
    window.scrollTo({ top: window.scrollY, behavior: 'auto' }); // no-op, keeps position on re-render
  }

  // ============================================================
  // Scroll-reveal + animated stat counters
  // ============================================================

  let revealObserver = null;
  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    const els = pageContentEl.querySelectorAll('.reveal');
    if (!els.length) return;
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(elx => revealObserver.observe(elx));
  }

  let statsObserver = null;
  function initStatsCounter() {
    if (statsObserver) statsObserver.disconnect();
    const nums = pageContentEl.querySelectorAll('.stat-num[data-count]');
    if (!nums.length) return;
    statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    nums.forEach(elx => statsObserver.observe(elx));
  }

  function runCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.textContent = target + suffix; return; }
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function attachContentEvents() {
    pageContentEl.querySelectorAll('[data-goto]').forEach(elx => {
      elx.addEventListener('click', () => navigate(elx.getAttribute('data-goto')));
    });
    pageContentEl.querySelectorAll('[data-goto-area]').forEach(elx => {
      elx.addEventListener('click', () => {
        const idx = parseInt(elx.getAttribute('data-goto-area'), 10);
        transitionTo(
          () => { state.page = 'areas'; window.location.hash = 'areas'; },
          () => scrollToAreaRow(idx)
        );
      });
    });
    pageContentEl.querySelectorAll('[data-select-member]').forEach(elx => {
      elx.addEventListener('click', () => {
        transitionTo(() => {
          state.selectedMember = elx.getAttribute('data-select-member');
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
      });
    });
    pageContentEl.querySelectorAll('[data-back-to-team]').forEach(elx => {
      elx.addEventListener('click', () => transitionTo(() => { state.selectedMember = null; state.cvView = null; }));
    });
    pageContentEl.querySelectorAll('[data-view-cv]').forEach(elx => {
      elx.addEventListener('click', () => {
        transitionTo(() => {
          state.cvView = elx.getAttribute('data-view-cv');
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
      });
    });
    pageContentEl.querySelectorAll('[data-cv-back]').forEach(elx => {
      elx.addEventListener('click', () => transitionTo(() => { state.cvView = null; }));
    });
    pageContentEl.querySelectorAll('[data-cv-print]').forEach(elx => {
      elx.addEventListener('click', () => window.print());
    });
    pageContentEl.querySelectorAll('[data-accordion-toggle]').forEach(elx => {
      elx.addEventListener('click', () => elx.closest('.accordion-item').classList.toggle('open'));
    });
    pageContentEl.querySelectorAll('[data-hero-dot]').forEach(elx => {
      elx.addEventListener('click', () => {
        state.heroSlide = parseInt(elx.getAttribute('data-hero-dot'), 10);
        updateHeroSlideDOM();
      });
    });
    pageContentEl.querySelectorAll('[data-field]').forEach(elx => {
      elx.addEventListener('input', () => { state[elx.getAttribute('data-field')] = elx.value; });
    });
    pageContentEl.querySelectorAll('[data-contact-form]').forEach(formEl => {
      formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = encodeURIComponent('Consulta desde el sitio web - ' + (state.formName || ''));
        const body = encodeURIComponent((state.formMessage || '') + '\n\n' + (state.formEmail || ''));
        window.location.href = 'mailto:info@vignolobarzallo.com?subject=' + subject + '&body=' + body;
      });
    });
  }

  function triggerKenBurns(imgEl) {
    if (!imgEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    imgEl.style.transition = 'none';
    imgEl.style.transform = 'scale(1)';
    void imgEl.offsetWidth; // force reflow so the reset above is committed before restarting
    imgEl.style.transition = 'transform ' + (MOTION.heroZoom / 1000) + 's ease-out';
    imgEl.style.transform = 'scale(1.07)';
  }

  function triggerActiveKenBurns() {
    triggerKenBurns(pageContentEl.querySelector('.hero-slide.active img'));
  }

  function updateHeroSlideDOM() {
    const slides = pageContentEl.querySelectorAll('.hero-slide');
    const dots = pageContentEl.querySelectorAll('.hero-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === state.heroSlide));
    dots.forEach((d, i) => d.classList.toggle('active', i === state.heroSlide));
    triggerActiveKenBurns();
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroTimer = setInterval(() => {
      state.heroSlide = (state.heroSlide + 1) % 3;
      // Patch only the hero's own classes rather than a full render() so an
      // in-progress scroll position, focus, or form entry elsewhere on the
      // homepage isn't disturbed every 9s by tearing down the whole page.
      updateHeroSlideDOM();
    }, MOTION.heroInterval);
  }
  function stopHeroTimer() {
    if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
  }

  // ============================================================
  // Header nav (static shell, not re-rendered by page render)
  // ============================================================

  function initHeader() {
    document.querySelectorAll('[data-nav]').forEach(elx => {
      elx.addEventListener('click', (e) => {
        e.preventDefault();
        navigate(elx.getAttribute('data-nav'));
        closeMobileNav();
      });
    });
    document.querySelectorAll('.lang-opt').forEach(elx => {
      elx.addEventListener('click', () => { state.lang = elx.getAttribute('data-lang'); render(); });
    });

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    function closeMobileNav() {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    const header = document.querySelector('.site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================================
  // Static widgets: quiz trigger label + cookie banner text
  // ============================================================

  function updateStaticWidgetsText() {
    const T = t();
    const triggerLabel = document.getElementById('quiz-trigger-label');
    if (triggerLabel) triggerLabel.textContent = T.quiz.trigger;
    const cookieText = document.getElementById('cookie-text');
    if (cookieText) cookieText.textContent = T.cookies.text;
    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieAccept) cookieAccept.textContent = T.cookies.accept;
    const cookieDecline = document.getElementById('cookie-decline');
    if (cookieDecline) cookieDecline.textContent = T.cookies.decline;
    const calloutText = document.getElementById('quiz-callout-text');
    if (calloutText) calloutText.textContent = T.quiz.callout;
  }

  // ============================================================
  // Practice-area finder quiz
  // ============================================================

  const quizModalEl = document.getElementById('quiz-modal');
  const quizOverlayEl = document.getElementById('quiz-overlay');

  function renderQuizModal() {
    const T = t();
    const Q = T.quiz;

    if (state.quizArea !== null) {
      const area = T.areas.groups[state.quizArea];
      const waText = encodeURIComponent(
        (state.lang === 'en' ? 'Hello, I need help with: ' : 'Hola, necesito ayuda con: ') + area.title
      );
      quizModalEl.innerHTML = `
        <button class="quiz-close" data-quiz-close aria-label="${esc(Q.close)}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6 6 18M6 6l12 12"></path></svg>
        </button>
        <div class="quiz-eyebrow">${esc(Q.eyebrow)}</div>
        <h3 class="quiz-result-title">${esc(area.title)}</h3>
        <p class="quiz-result-sub">${esc(Q.resultSub)}</p>
        ${area.summary ? `<p class="quiz-result-summary">${esc(area.summary)}</p>` : ''}
        <ul class="quiz-result-list">${area.items.map(it => `<li>${esc(it)}</li>`).join('')}</ul>
        ${area.checklist && area.checklist.length ? `
        <div class="quiz-checklist">
          <div class="quiz-checklist-label">${esc(Q.checklistLabel)}</div>
          <ul class="quiz-checklist-list">${area.checklist.map(it => `<li>${esc(it)}</li>`).join('')}</ul>
        </div>` : ''}
        <div class="quiz-result-actions">
          <a class="primary" href="#areas" data-quiz-goto-areas>${esc(Q.viewArea)}</a>
          <a href="https://wa.me/593998443338?text=${waText}" target="_blank" rel="noopener">${esc(Q.whatsapp)}</a>
          <a href="#contacto" data-quiz-goto-contact>${esc(Q.contact)}</a>
        </div>
        <p class="quiz-confidential-note">${esc(Q.confidentialNote)}</p>
        ${area.related !== undefined ? `
        <p class="quiz-related"><span class="lbl">${esc(Q.relatedLabel)}</span> <button type="button" data-quiz-goto-related="${area.related}">${esc(T.areas.groups[area.related].title)}</button></p>` : ''}
        <button class="quiz-restart" data-quiz-restart type="button">${esc(Q.restart)}</button>
      `;
      return;
    }

    const node = Q[state.quizStep];
    const stepIndex = state.quizPath.length;
    const totalSteps = 2;
    const dots = Array.from({ length: totalSteps }, (_, i) =>
      `<span class="${i <= stepIndex ? 'done' : ''}"></span>`
    ).join('');

    quizModalEl.innerHTML = `
      <button class="quiz-close" data-quiz-close aria-label="${esc(Q.close)}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 6 6 18M6 6l12 12"></path></svg>
      </button>
      <div class="quiz-eyebrow">${esc(Q.eyebrow)}</div>
      <div class="quiz-progress">${dots}</div>
      <h3 class="quiz-question">${esc(node.question)}</h3>
      <div class="quiz-options">
        ${node.options.map((opt, i) => `<button class="quiz-option" type="button" data-quiz-option="${i}">${esc(opt.label)}</button>`).join('')}
      </div>
    `;
  }

  function openQuiz() {
    state.quizStep = 'q1';
    state.quizArea = null;
    state.quizPath = [];
    renderQuizModal();
    quizOverlayEl.classList.add('open');
    requestAnimationFrame(() => quizOverlayEl.classList.add('visible'));
  }

  function closeQuiz() {
    quizOverlayEl.classList.remove('visible');
    setTimeout(() => quizOverlayEl.classList.remove('open'), MOTION.quizCloseFade);
  }

  function initQuiz() {
    document.getElementById('quiz-trigger').addEventListener('click', openQuiz);
    quizOverlayEl.addEventListener('click', (e) => { if (e.target === quizOverlayEl) closeQuiz(); });
    quizModalEl.addEventListener('click', (e) => {
      const optBtn = e.target.closest('[data-quiz-option]');
      if (optBtn) {
        const T = t();
        const node = T.quiz[state.quizStep];
        const opt = node.options[parseInt(optBtn.getAttribute('data-quiz-option'), 10)];
        state.quizPath.push(state.quizStep);
        if (opt.area !== undefined) {
          state.quizArea = opt.area;
          trackQuizArea(opt.area);
        } else {
          state.quizStep = opt.next;
        }
        renderQuizModal();
        return;
      }
      if (e.target.closest('[data-quiz-close]')) { closeQuiz(); return; }
      if (e.target.closest('[data-quiz-restart]')) {
        state.quizStep = 'q1'; state.quizArea = null; state.quizPath = [];
        renderQuizModal();
        return;
      }
      if (e.target.closest('[data-quiz-goto-areas]')) {
        e.preventDefault();
        const targetArea = state.quizArea;
        closeQuiz();
        transitionTo(
          () => { state.page = 'areas'; window.location.hash = 'areas'; },
          () => scrollToAreaRow(targetArea)
        );
        return;
      }
      if (e.target.closest('[data-quiz-goto-related]')) {
        e.preventDefault();
        const relatedIdx = parseInt(e.target.closest('[data-quiz-goto-related]').getAttribute('data-quiz-goto-related'), 10);
        closeQuiz();
        transitionTo(
          () => { state.page = 'areas'; window.location.hash = 'areas'; },
          () => scrollToAreaRow(relatedIdx)
        );
        return;
      }
      if (e.target.closest('[data-quiz-goto-contact]')) {
        e.preventDefault();
        const targetArea = state.quizArea;
        closeQuiz();
        transitionTo(() => {
          state.page = 'contacto';
          window.location.hash = 'contacto';
          if (targetArea !== null) {
            const T = t();
            const prefix = state.lang === 'en' ? 'I would like a consultation about: ' : 'Quisiera una consulta sobre: ';
            state.formMessage = prefix + T.areas.groups[targetArea].title;
          }
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
        return;
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && quizOverlayEl.classList.contains('open')) closeQuiz();
    });
  }

  function scrollToAreaRow(index) {
    if (index === null || index === undefined) { window.scrollTo({ top: 0, behavior: 'auto' }); return; }
    const rowEl = document.getElementById('area-row-' + index);
    if (!rowEl) { window.scrollTo({ top: 0, behavior: 'auto' }); return; }
    const topbar = document.querySelector('.topbar');
    const header = document.querySelector('.site-header');
    const offset = (topbar ? topbar.offsetHeight : 0) + (header ? header.offsetHeight : 0) + 16;
    const top = rowEl.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' });
    rowEl.classList.add('area-row-highlight');
    setTimeout(() => rowEl.classList.remove('area-row-highlight'), MOTION.highlightFlash);
  }

  function trackQuizArea(index) {
    try {
      const stats = JSON.parse(localStorage.getItem('vb_quiz_stats') || '{}');
      stats[index] = (stats[index] || 0) + 1;
      localStorage.setItem('vb_quiz_stats', JSON.stringify(stats));
    } catch (e) { /* localStorage unavailable, skip tracking */ }
  }

  function initQuizCallout() {
    const key = 'vb_quiz_callout_shown';
    if (localStorage.getItem(key)) return;
    const callout = document.getElementById('quiz-callout');
    const closeBtn = document.getElementById('quiz-callout-close');
    const showTimer = setTimeout(() => {
      callout.classList.add('visible');
      localStorage.setItem(key, '1');
    }, MOTION.calloutDelay);
    function hide() { callout.classList.remove('visible'); }
    closeBtn.addEventListener('click', (e) => { e.stopPropagation(); clearTimeout(showTimer); hide(); });
    callout.addEventListener('click', () => { hide(); openQuiz(); });
    setTimeout(hide, MOTION.calloutAutoHide);
  }

  // ============================================================
  // Cookie consent banner
  // ============================================================

  function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const stored = localStorage.getItem('vb_cookie_consent');
    if (stored) { initQuizCallout(); return; }
    setTimeout(() => {
      banner.classList.add('visible');
      requestAnimationFrame(() => banner.classList.add('shown'));
    }, 1200);
    function dismiss(value) {
      localStorage.setItem('vb_cookie_consent', value);
      banner.classList.remove('shown');
      setTimeout(() => banner.classList.remove('visible'), MOTION.cookieHide);
      initQuizCallout();
    }
    document.getElementById('cookie-accept').addEventListener('click', () => dismiss('accepted'));
    document.getElementById('cookie-decline').addEventListener('click', () => dismiss('declined'));
  }

  // ============================================================
  // Boot
  // ============================================================

  document.addEventListener('DOMContentLoaded', () => {
    const hashPage = (window.location.hash || '').replace('#', '');
    state.page = validPages.includes(hashPage) ? hashPage : 'inicio';

    initHeader();
    initQuiz();
    initCookieBanner();
    render();

    window.addEventListener('hashchange', () => {
      const p = (window.location.hash || '').replace('#', '');
      if (validPages.includes(p) && p !== state.page) {
        transitionTo(() => {
          state.page = p;
          state.selectedMember = null;
          state.cvView = null;
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
        return;
      }
    });
  });
})();
