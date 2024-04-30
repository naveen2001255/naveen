import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule , MatDialogModule, MatSnackBarModule],
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
// export class FileuploadComponent {
//   @Output() fileSelected = new EventEmitter<File[]>();

//   fileName: string | undefined;
//   isFileSelected = false;
//   isFileDragging = false;

//   constructor() { }

//   onFileSelected(event: any) {
//     const files: FileList = event.target.files;
//     const selectedFiles: File[] = [];
//     for (let i = 0; i < files.length; i++) {
//       selectedFiles.push(files.item(i)!);
//     }
//     this.fileName = selectedFiles.map(file => file.name).join(', ');
//     this.isFileSelected = true;
//     this.fileSelected.emit(selectedFiles);
//   }



//   clearFile() {
//     this.fileName = undefined;
//     this.isFileSelected = false;
//     const fileInput = document.getElementById('fileInput') as HTMLInputElement;
//     if (fileInput) {
//       fileInput.value = '';
//     }
//   }


//   onFileDropped(event: DragEvent) {
//     event.preventDefault();
//     this.isFileDragging = false;
//     const files = event.dataTransfer?.files;
//     if (files && files.length > 0) {
//       const file: File = files[0];
//       const fileList: File[] = [file]; 
//       this.fileName = file.name;
//       this.isFileSelected = true;
//       this.fileSelected.emit(fileList); // Emit an array containing the dropped file
//     }
//   }



//   onFileDraggedOver(event: DragEvent) {
//     event.preventDefault();
//     this.isFileDragging = true;
//   }
// }

export class FileuploadComponent {
  public files: any[] = [];
  @Output() fileSelected = new EventEmitter<File[]>();
  constructor(private _snackBar: MatSnackBar,) { }

  onFileChange(pFileList: any) {
    this.files = Object.keys(pFileList).map((key: any) => pFileList[key]);
    this._snackBar.open("Successfully upload!", 'Close', {
      duration: 2000,
    });
  }

  deleteFile(f: any) {
    this.files = this.files.filter(function (w) { return w.name != f.name });
    this._snackBar.open("Successfully delete!", 'Close', {
      duration: 2000,
    });
  }

  // openConfirmDialog(pIndex :any): void {
  //   const dialogRef = this.dialog.open(DialogConfirmComponent, {
  //     panelClass: 'modal-xs'
  //   });
  //   dialogRef.componentInstance.fName = this.files[pIndex].name;
  //   dialogRef.componentInstance.fIndex = pIndex;


  //   dialogRef.afterClosed().subscribe((result:any) => {
  //     if (result !== undefined) {
  //       this.deleteFromArray(result);
  //     }
  //   });
  // }

  deleteFromArray(index: any) {
    console.log(this.files);
    this.files.splice(index, 1);
  }
}