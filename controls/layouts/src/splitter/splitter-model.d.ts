import { Component, Property, setStyleAttribute, ChildProperty, compile } from '@syncfusion/ej2-base';import { NotifyPropertyChanges, addClass, Collection, isNullOrUndefined, append } from '@syncfusion/ej2-base';import { Event, EmitType, EventHandler, selectAll, removeClass, select, Browser, detach, formatUnit } from '@syncfusion/ej2-base';
import {Orientation,CreatedEventArgs,ResizeEventArgs,ResizingEventArgs} from "./splitter";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class PaneProperties
 */
export interface PanePropertiesModel {

    /**
     * Configures the properties for each pane.
     * @default ''
     */
    size?: string;

    /**
     * Specifies the value whether a pane is resizable. By default, the Splitter is resizable in all panes.
     * You can disable this for any specific panes using this property.
     * @default true
     */
    resizable?: boolean;

    /**
     * Specifies the minimum size of a pane. The pane cannot be resized if it is less than the specified minimum size.
     * @default null
     */
    min?: string;

    /**
     * Specifies the maximum size of a pane. The pane cannot be resized if it is more than the specified maximum limit.
     * @default null
     */
    max?: string;

    /**
     * Specifies the content of split pane as plain text, HTML markup, or any other JavaScript controls.
     * @default ''
     */
    content?: string;

}

/**
 * Interface for a class Splitter
 */
export interface SplitterModel extends ComponentModel{

    /**
     * Specifies the height of the Splitter component that accepts both string and number values.
     * @default '100%'
     */
    height?: string;

    /**
     * Specifies the width of the Splitter control, which accepts both string and number values as width.
     * The string value can be either in pixel or percentage format.
     * @default '100%'
     */
    width?: string;

    /**
     * Configures the individual pane behaviors such as content, size, resizable, minimum, and maximum validation.
     * @default []
     */
    paneSettings?: PanePropertiesModel[];

    /**
     * Specifies a value that indicates whether to align the split panes horizontally or vertically.
     *  * Set the orientation property as "Horizontal" to create a horizontal splitter that aligns the panes left-to-right.
     *  * Set the orientation property as "Vertical" to create a vertical splitter that aligns the panes top-to-bottom.
     * @default Horizontal 
     */
    orientation?: Orientation;

    /**
     * Specifies the CSS class names that defines specific user-defined
     * styles and themes to be appended on the root element of the Splitter.
     * It is used to customize the Splitter control.
     * One or more custom CSS classes can be specified to the Splitter.
     * @default ''
     */
    cssClass?: string;

    /**
     * Specifies boolean value that indicates whether the component is enabled or disabled.
     * The Splitter component does not allow to interact when this property is disabled.
     * @default true
     */
    enabled?: boolean;

    /**
     * Enables or disables rendering of control from right-to-left (RTL) direction.
     * When it is set to true, the Splitter and its content will be displayed from right-to-left.
     * @default false
     */
    enableRtl?: boolean;

    /**
     * Specifies the size of the separator line for both horizontal or vertical orientation.
     * The separator is used to separate the panes by lines.
     * @default null
     */
    separatorSize?: number;

    /**
     * Triggers after creating the splitter component with its panes.
     * @event 
     */
    created?: EmitType<CreatedEventArgs>;

    /**
     * Triggers when the split pane is started to resize.
     * @event 
     */
    resizeStart?: EmitType<ResizeEventArgs>;

    /**
     * Triggers when a split pane is being resized.
     * @event 
     */
    resizing?: EmitType<ResizingEventArgs>;

    /**
     * Triggers when the resizing of split pane is stopped.
     * @event 
     */
    resizeStop?: EmitType<ResizingEventArgs>;

}