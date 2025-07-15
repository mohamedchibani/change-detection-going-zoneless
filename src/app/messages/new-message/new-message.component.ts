import { MessagesService } from './../messages.service';
import { Component, signal, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  private messagesService = inject(MessagesService)
  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText());
    this.enteredText.set('');
  }
}
