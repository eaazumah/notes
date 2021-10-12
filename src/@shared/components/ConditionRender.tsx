import React from 'react';

interface RenderProps {
  renderIf: boolean;
  children?: React.ReactNode;
}
export type ConditionRenderProps<T = Record<string, any>> = T & RenderProps;

const ConditionRender = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  return function ({renderIf, ...props}: ConditionRenderProps<P>) {
    if (!renderIf) return null;
    return <Component {...(props as P)} />;
  };
};

export const ConditionRenderComponent: React.FC<RenderProps> = ({
  renderIf,
  children,
}) => {
  if (!renderIf) return null;
  return <>{children}</>;
};

export default ConditionRender;
