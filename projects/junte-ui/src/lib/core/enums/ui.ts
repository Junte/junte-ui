import { GanttTypes } from '../../collections/gantt/enums';
import { ButtonType } from '../../forms/button/enums';
import { DatePickerType } from '../../forms/date-picker/enums';
import { InputAutocomplete, InputScheme, InputType } from '../../forms/input/enums';
import { SelectMode } from '../../forms/select/enums';
import { RowAlign, RowJustify } from '../../layout/grid/enums';
import { SkeletonType } from '../../layout/skeleton/enums';
import { LinkTarget } from '../../navigation/link/enums';
import { PagerMode } from '../../navigation/pager/enums';
import { Behaviour } from './behaviour';
import { Breakpoint } from './breakpoint';
import { Color } from './color';
import { Feature } from './feature';
import { Fit } from './fit';
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from './flex';
import { Gutter } from './gutter';
import { Height } from './height';
import { icons } from './icons';
import { Key, Modifier } from './keyboard';
import { Orientation } from './orientation';
import { Outline } from './outline';
import { Placement } from './placement';
import { Position } from './position';
import { Scheme } from './scheme';
import { Shape } from './shape';
import { Size } from './size';
import { State } from './state';
import { MenuStyle } from './style';
import { TextAlign, TextTransform } from './text';
import { Theme } from './theme';
import { Triggers } from './triggers';
import { UrlMatching } from './url';
import { Validator } from './validator';
import { Width } from './width';

export class UI {
  static gutter = Gutter;
  static theme = Theme;
  static scheme = Scheme;
  static size = Size;
  static outline = Outline;
  static position = Position;
  static breakpoint = Breakpoint;
  static behaviour = Behaviour;
  static shape = Shape;
  static orientation = Orientation;
  static width = Width;
  static height = Height;
  static color = Color;
  static icons = icons;
  static matching = UrlMatching;
  static feature = Feature;
  static state = State;
  static fit = Fit;
  static target = LinkTarget;
  static align = FlexAlign;
  static justify = FlexJustify;
  static direction = FlexDirection;
  static wrap = FlexWrap;
  static validator = Validator;
  static placement = Placement;
  static trigger = Triggers;
  static text = {align: TextAlign, transform: TextTransform};
  static grid = {row: {align: RowAlign, justify: RowJustify}};
  static datePicker = {type: DatePickerType};
  static skeleton = {type: SkeletonType};
  static pager = {mode: PagerMode};
  static input = {type: InputType, scheme: InputScheme, autocomplete: InputAutocomplete};
  static select = {mode: SelectMode};
  static button = {type: ButtonType};
  static gantt = {type: GanttTypes};
  static menu = {style: MenuStyle};
  static keyboard = {key: Key, modifier: Modifier};
}
