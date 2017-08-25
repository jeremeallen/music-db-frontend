import Model from './BaseModel';

class Artist extends Model {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default Artist;
