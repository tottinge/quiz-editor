import { DecoyList } from './DecoyList';

const meta = {
  component: DecoyList,
};

export default meta;

export const Populated = {
  args: {
    decoys: ["corvids", "canines", "felines", "parrots"]
  }
};

export const Empty = {
  args: {
    decoys: []
  }
};

