export const codingSpec = [
    {
        title: 'Groupers',
        description: 'This section contains all the "Containing" Medicinal Product classes, plus groupers.',
        bindings: [
          {
            title: 'Medicinal product + groupers',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  [0..0] 1142139005 |Count of base of active ingredient| = *,
                  [0..0] 411116001 |Has manufactured dose form| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: 'Medicinal products, contain at least provided ingredientes (open world assuption), no information on form.'
          },
          {
            title: 'Medicinal product form + groupers',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  [0..0] 1142139005 |Count of base of active ingredient| = *,
                  411116001 |Has manufactured dose form| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: 'Medicinal products, with form details.'
          }
        ]
      },
      {
        title: 'Medicinal products',
        description: 'This section contains all the "Only" Medicinal product and Medicinal product form classes.',
        bindings: [
          {
            title: 'Medicinal product only',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  1142139005 |Count of base of active ingredient| = *,
                  [0..0] 411116001 |Has manufactured dose form| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: 'Medicinal products, containing only the provided ingredientes (close world assuption), with no information on form.'
          },
          {
            title: 'Medicinal product form only',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  1142139005 |Count of base of active ingredient| = *,
                  411116001 |Has manufactured dose form| = *,
                  [0..0] 732943007 |Has basis of strength substance (attribute)| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: 'Medicinal products, with form details, containing only the provided ingredientes (close world assuption).'
          },
          {
            title: 'Medicinal product precisely',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  762949000 |Has precise active ingredient (attribute)| = * ,
                  1142139005 |Count of base of active ingredient| = *,
                  [0..0] 732943007 |Has basis of strength substance (attribute)| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: `Medicinal products, with form details, precise active ingredient, and containing only the provided ingredientes (close world assuption).
                  <br><b>Not populated in the International Edition</b>`
          },
          {
            title: 'Real medicinal product',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  [0..0] 411116001 |Has manufactured dose form| = *,
                  774158006 |Has product name| = *`,
            value: '',
            note: `Real Medicinal products, contain only the provided ingredients (close world assuption), no information on form, and brand name.
                  <br><b>Not populated in the International Edition</b>`
          }
        ]
      },
      {
        title: 'Clinical Drugs',
        description: 'This section contains all the Clinical Drug classes, abstract and real.',
        bindings: [
          {
            title: 'Clinical drug',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  732943007 |Has basis of strength substance (attribute)| = *,
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: `Clinical Drugs, with ingredients, form, and strength, but no brand.`
          },
          {
            title: 'Real Clinical drug',
            type: 'autocomplete',
            ecl: `<< 763158003 |Medicinal product| :
                  732943007 |Has basis of strength substance (attribute)| = *,
                  774158006 |Has product name| = *`,
            value: '',
            note: `Clinical Drugs, with ingredients, form, strength, and brand.
                  <br><b>Not populated in the International Edition</b>`
          }
        ]
      },
      {
        title: 'Packaged Clinical Drugs',
        description: 'This section contains all the packaged Clinical Drug classes, abstract and real.',
        bindings: [
          {
            title: 'Packaged Clinical drugs',
            type: 'autocomplete',
            ecl: `<< 781405001 |Medicinal product package|: 
                  [0..0] 774158006 |Has product name| = *`,
            value: '',
            note: `Packaged Clinical Drugs, with ingredients, form, strength and package details, but no brand.
                  <br><b>Not populated in the International Edition</b>`
          },
          {
            title: 'Real Packaged Clinical drugs',
            type: 'autocomplete',
            ecl: `<< 781405001 |Medicinal product package|: 
                  774158006 |Has product name| = *`,
            value: '',
            note: `Packaged Clinical Drugs, with ingredients, form, strength, package details, and brand.
                  <br><b>Not populated in the International Edition</b>`
          }
        ]
      }
]