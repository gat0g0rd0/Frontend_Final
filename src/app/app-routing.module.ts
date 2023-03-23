import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editar-educacion.component';
import { NeweducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/main-skill/editar-skill.component';
import { NewSkillComponent } from './components/main-skill/nueva-skill.component';
import { LoginComponent } from './components/login/login.component';
import { EditarComponent } from './components/main-acerca/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent},
  { path: 'editaracerca/:id', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
