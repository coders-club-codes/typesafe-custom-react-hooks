import { useState } from 'react';

export const useNumber = (initialValue: number) => useState(initialValue);
