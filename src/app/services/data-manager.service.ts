import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PubSubDistinct } from 'pubsub-distinct';
import { config } from '../config/config';
import { Subscription } from 'rxjs';

@Injectable()
export class DataManagerService {
  private isPublished: any = {};
  private subscribers:any = {};

  constructor(private api: ApiService, private pubSub: PubSubDistinct) {
  }

  loadCategories(force: boolean = false) {
    console.log('start loading');
    if (this.checkIsPublishedOrForce(config.pubSubEvents.loadCategories, force)) {
      console.log('in loading');
      this.api.getCategories().subscribe((response: any) => {
          console.log('loading response: ', response);
          if (response.status && response.data) {
            this.pubSub.publishDistinct(config.pubSubEvents.loadCategories, response.data);
          }
          else {
            console.warn('Error load data loadCategories(): ', response);
          }
        },
        (error: any) => {
          console.error('Request Error loadCategories(): ', error);
        });

      this.setPublished(config.pubSubEvents.loadCategories);
    }
  }

  subscribeToCategories(callback: (data?: any) => any): Subscription {
    this.loadCategories();

    return this.pubSub.subscribe(config.pubSubEvents.loadCategories, callback);
  }

  removeSubscribers(subscriptionsList: Subscription[]): void {
    this.pubSub.unsubscribeAll(subscriptionsList);
  }

  resetIsPublished(): void {
    this.isPublished = {};
  }

  private checkIsPublishedOrForce(eventName: string, force: boolean = false) {
    return !this.isPublished[eventName] || force;
  }

  private setPublished(eventName: string, value: boolean = true): void {
    this.isPublished[eventName] = value;
  }


}
