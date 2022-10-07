import {Collection} from "../models/Collection";


export abstract class CollectionView<T, K> {
  protected constructor(public parent: Element, public collection: Collection<T, K>) {}

  models = this.collection.models;

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");

    for (let model of this.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }

    this.parent.append(templateElement.content);
  }

  abstract renderItem(model: T, itemParent: Element): void;
}
