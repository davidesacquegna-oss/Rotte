import type { Schema, Struct } from '@strapi/strapi';

export interface ItinerarioGiorno extends Struct.ComponentSchema {
  collectionName: 'components_itinerario_giornos';
  info: {
    displayName: 'giorno';
  };
  attributes: {
    contenuto: Schema.Attribute.Text;
    titolo_giorno: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'itinerario.giorno': ItinerarioGiorno;
    }
  }
}
