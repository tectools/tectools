import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeatherModule} from "angular-feather";
import {
  AlertOctagon,
  Database,
  Heart,
  Settings,
  Key,
  AlertTriangle,
  ExternalLink,
  Check,
  Shield, ShieldOff, UploadCloud, CloudOff, Clipboard, Link, Shuffle, Github, FileText, Share2, Layers
} from "angular-feather/icons";

const icons = {
  Heart,
  AlertOctagon,
  Settings,
  Database,
  Key,
  AlertTriangle,
  ExternalLink,
  Check,
  Shield,
  ShieldOff,
  UploadCloud,
  CloudOff,
  Clipboard,
  Link,
  Shuffle,
  Github,
  FileText,
  Share2,
  Layers
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
