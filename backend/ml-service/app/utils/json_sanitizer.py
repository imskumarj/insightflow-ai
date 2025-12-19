import math

def sanitize(value):
    if isinstance(value, float):
        if math.isnan(value) or math.isinf(value):
            return 0.0
        return value

    if isinstance(value, dict):
        return {k: sanitize(v) for k, v in value.items()}

    if isinstance(value, list):
        return [sanitize(v) for v in value]

    return value
