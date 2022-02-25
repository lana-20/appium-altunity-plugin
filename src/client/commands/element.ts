import type { AltUnityClient } from '..'
import { AltElement } from '../alt-element'
import { AltComponent, AltComponentData } from '../alt-component'

export async function getElementText(this: AltUnityClient, element: AltElement) {
    return await this.sendSimpleCommand('getText', {altUnityObject: element.asUnityObject()})
}

export async function getElementComponents(this: AltUnityClient, element: AltElement): Promise<AltComponent[]> {
    const res = await this.sendSimpleCommand('getAllComponents', {altUnityObjectId: element.id.toString()})
    const data = JSON.parse(res) as AltComponentData[]
    return data.map((d) => new AltComponent(this, element, d))
}
