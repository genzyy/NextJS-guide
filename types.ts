export interface Query {
  characters: Characters[];
}

export interface Info {
  count: Number;
  pages: Number;
}

export interface Characters {
  id: String;
  name: String;
  status: String;
  species: String;
  type: String;
  image: String;
  origin: Origin;
  location: Location;
  episode: Episode[];
}

export interface Origin {
  id: String;
  name: String;
}

export interface Location {
  id: String;
  name: String;
}

export interface Episode {
  id: String;
  air_date: String;
  episode: String;
}
