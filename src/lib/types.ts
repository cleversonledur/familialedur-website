export interface Person {
  id: string;
  name: string;
  birthDate?: string;
  birthPlace?: string;
  deathDate?: string;
  deathPlace?: string;
  burialDate?: string;
  burialPlace?: string;
  occupation?: string;
  gender: "M" | "F" | "U";
  alsoKnownAs?: string;
  immigrationDate?: string;
  residence?: string;
  religion?: string;
  notes?: string;
  spouses: Spouse[];
  parentId?: string;
  children: string[];
  generation: number;
  bookRef?: string;
  source: "livro1" | "livro2" | "both";
  /** FamilySearch person ID (e.g. LZ8W-D3Q). Link: https://www.familysearch.org/tree/person/details/{id} */
  familySearchId?: string;
}

export interface Spouse {
  name: string;
  marriageDate?: string;
  marriagePlace?: string;
  birthDate?: string;
  birthPlace?: string;
  deathDate?: string;
  deathPlace?: string;
  familySearchId?: string;
  order: number;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: "europe" | "migration" | "brazil" | "family";
}

export interface Surname {
  name: string;
  origin: string;
  meaning?: string;
  connection: string;
  region?: string;
}

export interface Place {
  name: string;
  country: string;
  region?: string;
  lat?: number;
  lng?: number;
  description: string;
  period: string;
}
