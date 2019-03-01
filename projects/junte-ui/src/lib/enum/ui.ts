export enum Icons {
  check = 'check',
  plus = 'plus',
  close = 'close',
  cancel = 'cancel',
  search = 'search',
  arrowRight = 'arrow-right',
  resize = 'resize',
  expand = 'expand',
  sort = 'sort',
  arrowLast = 'arrow-last'
}

export enum Schemes {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  fail = 'fail'
}


export enum Sizes {
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum Outline {
  ghost = 'ghost',
  fill = 'fill'
}

export enum TypeButton {
  button = 'button',
  submit = 'submit'
}

export enum FlexAlign {
  start = 'start',
  center = 'center',
  end = 'end',
  baseline = 'baseline',
  stretch = 'stretch'
}

export enum FlexJustify {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly'
}

export enum FlexDirection {
  row = 'row',
  column = 'column',
  rowReverse = 'row-reverse',
  columnReverse = 'column-reverse'
}

export enum FlexWrap {
  wrap = 'wrap',
  noWrap = 'nowrap',
  reverse = 'reverse'
}

export enum FlexAlignContent {
  start = 'start',
  center = 'center',
  end = 'end',
  between = 'between',
  around = 'around',
  evenly = 'evenly',
  stretch = 'stretch'
}

export enum FlexAlignSelf {
  start = 'start',
  center = 'center',
  end = 'end',
  stretch = 'stretch',
  baseline = 'baseline',
  auto = 'auto'
}

export enum StackType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum ValidationTypeError {
  required = 'required',
  minlength = 'minlength'
}

export enum MenuType {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

export enum StackGutter {
  small = 'small',
  normal = 'normal',
  large = 'large'
}

export enum FormLayout {
  vertical = 'vertical',
  horizontal = 'horizontal',
  inline = 'inline'
}

export enum InputType {
  text = 'text',
  password = 'password'
}

export enum SelectMode {
  single = 'single',
  multiple = 'multiple'
}

export enum Positions {
  rightTop = 'right-top',
  leftTop = 'left-top',
  inline = 'inline'
}

export enum Shapes {
  circle = 'circle',
  square = 'square'
}

export class UI {
  static icons = Icons;
  static schemes = Schemes;
  static sizes = Sizes;
  static outline = Outline;
  static position = Positions;
  static shape = Shapes;
  static type = MenuType;
  static flex = {
    align: FlexAlign,
    justify: FlexJustify,
    direction: FlexDirection,
    wrap: FlexWrap,
    alignContent: FlexAlignContent,
    alignSelf: FlexAlignSelf
  };
  static stack = {
    type: StackType,
    gutter: StackGutter
  };
  static form = {
    layout: FormLayout,
    input: InputType,
    button: {
      type: TypeButton
    },
    validators: {
      typeError: ValidationTypeError
    }
  };
  static select = SelectMode;
}

