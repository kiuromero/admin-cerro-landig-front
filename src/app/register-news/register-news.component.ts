import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { NewsService } from '../core/news.service';

@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.scss']
})
export class RegisterNewsComponent implements OnInit {
  formRegister: FormGroup;
  categories: any = [];
  authors: any = [];

  constructor(private fb: FormBuilder, private newsService: NewsService) { }

  initializedForm() {
    this.formRegister = this.fb.group({
      title: ['', Validators.required],
      shortContent: ['', Validators.required],
      content: ['', Validators.required],
      urlImage: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.initializedForm();
    this.getCategories();
    this.getAuthors();
  }

  register() {
    if (!this.formRegister.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Campos Vacios',
        text: 'Debes completar todos los campos para poder Registrar la Noticia',
      });
    } else {
      const dataRegister = this.formRegister.value;
      let data = {
        tittle: dataRegister.title,
        short_content: dataRegister.shortContent,
        content: dataRegister.content,
        image: dataRegister.urlImage,
        id_category: dataRegister.category,
        author: dataRegister.author,
        avatar_author: dataRegister.author
      }    
      this.newsService.insertNews(data).subscribe(
        res => {
          Swal.fire({
            title: '<strong>Registro Exitoso!</strong>',
            icon: 'success',
            html:
              'Tu Registro ha sido completado con Exito, ',

            confirmButtonText:
              '<i class="fa fa-thumbs-up"></i> Entendido!',
          });
          this.initializedForm();
        },
        error => { }
      );
    }
  }

  getCategories() {
    this.newsService.getCategories().subscribe(
      (res) => {
        this.categories = res.map((obj) => {
          return { id: obj.id, nom: obj.nom };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAuthors() {
    this.newsService.getAuthors().subscribe(
      (res) => {
        this.authors = res.data.map((obj) => {
          return { id: obj.id, name: obj.name, nom: obj.avatar_author };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
