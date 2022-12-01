import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../../services/question.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-quiz-question',
  templateUrl: './view-quiz-question.component.html',
  styleUrls: ['./view-quiz-question.component.scss']
})
export class ViewQuizQuestionComponent implements OnInit {
  qId :any;
  qTitle:any;
  questions = [];

  constructor(private _route: ActivatedRoute,
              private _question: QuestionService,
              private _snak: MatSnackBar) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qId'];
    this.qTitle = this._route.snapshot.params['qTitle'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteQuestion(qid:any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data) => {
            this._snak.open('Question Deleted ', '', {
              duration: 3000,
            });
            this.questions = this.questions.filter((q) => q['quesId'] != qid);
          },

          (error) => {
            this._snak.open('Error in deleting questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }

}
