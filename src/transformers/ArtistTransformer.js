import BaseTransformer from './BaseTransformer';

class ArtistTransformer extends BaseTransformer {
  static fetch(artist) {
    return {
      id: artist.id,
      firstName: artist.first_name,
      lastName: artist.last_name,
      fullName: `${artist.first_name} ${artist.last_name}`,
      gender: artist.gender,
      birthday: artist.birthday,
      biography: artist.biography,
    };
  }

  static send(artist) {
    return {
      id: artist.id,
      first_name: artist.firstName,
      last_name: artist.lastName,
      gender: artist.gender,
      birthday: artist.birthday,
      biography: artist.biography,
    };
  }
}

export default ArtistTransformer;
