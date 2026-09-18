import type { Schema, Struct } from '@strapi/strapi';

export interface CaratteristicaCaratteristiche extends Struct.ComponentSchema {
  collectionName: 'components_caratteristica_caratteristiches';
  info: {
    displayName: 'caratteristiche';
  };
  attributes: {
    testo: Schema.Attribute.String;
  };
}

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
      'caratteristica.caratteristiche': CaratteristicaCaratteristiche;
      'itinerario.giorno': ItinerarioGiorno;
    }
  }
}
