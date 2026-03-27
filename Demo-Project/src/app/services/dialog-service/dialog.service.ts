import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { SmartDialogComponent } from '../../components/smart-Components/smart-dialog/smart-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  index = 0;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(component: TemplateRef<any> | any,backgroundNeed?:any , data?:any, output?:any): ComponentRef<any> {
    
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory( SmartDialogComponent );
    const componentRef = componentFactory.create(this.injector);

    // Pass data to the dialog component
    componentRef.instance.content = component;
    componentRef.instance.index = this.index;
    componentRef.instance.componentRef = componentRef;
    componentRef.instance.backgroundNeed = backgroundNeed ?? true;
    if(component instanceof TemplateRef){
      componentRef.instance.isTemplate = true;
    }
    else{
      componentRef.instance.componentInputs = data?? {};
      componentRef.instance.componentInputs.componentRef = componentRef;
    }
    this.index++;

    componentRef.onDestroy(()=>{
      output?.afterClosed();
    })

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    return componentRef;
  }

  close(componentRef: any): void {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();
  }
}
