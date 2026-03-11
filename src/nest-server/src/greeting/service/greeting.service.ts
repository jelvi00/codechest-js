import { Injectable } from '@nestjs/common';
import { IllegalArgumentException } from "../../exception";

@Injectable()
export class GreetingService {
  getHello(name: string = 'World', witSmile: boolean = false): string {
    return `Hello ${name}!${witSmile ? ' :)' : ''}`;
  }

  addGreeting(request: { name: string, type: string }, witSmile: boolean = false): string {

    const { name, type } = request || {};

    if (!name || !type) return "Missing name or type";

    if (NOT_ALLOWED_GREETINGS.includes(type.toLowerCase()))
      throw new IllegalArgumentException();

    console.log(`${type} ${name}!${witSmile ? ' :)' : ''}`);

    return "Greeting added!";
  }
}

const NOT_ALLOWED_GREETINGS = ["bonjour"];
