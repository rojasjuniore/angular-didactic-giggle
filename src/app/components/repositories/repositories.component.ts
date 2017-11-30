import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: any = [];
  repository: IRepository = { name: '', description: '' };
  newRepository: IRepository = { name: '', description: '' };

  constructor(private _repoService: RepositoriesService) { }

  ngOnInit() {
    this._repoService.getRepos('rojasjuniore').subscribe((data) => {
      this.repositories = data;
      this.repository = data[0];
    }, erro => { });
  }

  setMainRepository(repository) {
    this.repository = repository;
  }

  addNewRepo() {

    this.repositories.unshift(this.newRepository);
    this.newRepository = { name: '', description: '' };
  }
}

interface IRepository {
  name: string;
  description: string;
}


